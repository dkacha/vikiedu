import { useStorage } from '@vueuse/core';
import { config } from './config';
import metaData from './metaData';

const userSettingsPersist = useStorage('userSettingsDice', config.userSettings);

type typeDiceDataItem = {
  diceTop: number;
  diceRight: number;
  diceBottom: number;
  diceLeft: number;
  targetTop: number;
  targetRight: number;
  targetBottom: number;
  targetLeft: number;
};

const diceData = ref<Record<number, typeDiceDataItem>>({});

useMakeArray(6).forEach((key) => {
  diceData.value[key] = {
    diceTop: 0,
    diceRight: 0,
    diceBottom: 0,
    diceLeft: 0,
    targetTop: 0,
    targetRight: 0,
    targetBottom: 0,
    targetLeft: 0,
  };
});

const useDice = (diceNumber: number) => {
  return {
    updateDiceData({
      top,
      right,
      bottom,
      left,
    }: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }) {
      diceData.value[diceNumber] = {
        ...diceData.value[diceNumber],
        diceTop: top,
        diceRight: right,
        diceBottom: bottom,
        diceLeft: left,
      };
    },
    updateDiceTarget({
      top,
      right,
      bottom,
      left,
    }: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }) {
      diceData.value[diceNumber] = {
        ...diceData.value[diceNumber],
        targetTop: top,
        targetRight: right,
        targetBottom: bottom,
        targetLeft: left,
      };
    },
  };
};

const diceCompletedList = computed(() => {
  const diceCompletedList: number[] = [];

  Object.keys(diceData.value).forEach((key) => {
    const diceNumber = parseInt(key);

    if (isNaN(diceNumber)) {
      return;
    }

    const diceItem = diceData.value[diceNumber];

    if (!diceItem || diceItem.diceTop === 0 || diceItem.targetTop === 0) {
      return;
    }

    if (diceItem.diceTop < diceItem.targetTop) {
      return;
    }

    if (diceItem.diceLeft < diceItem.targetLeft) {
      return;
    }

    if (diceItem.diceRight > diceItem.targetRight) {
      return;
    }

    if (diceItem.diceBottom > diceItem.targetBottom) {
      return;
    }

    diceCompletedList.push(diceNumber);
  });

  return diceCompletedList;
});

const diceCompleted = computed(() => {
  return diceCompletedList.value.length === userSettingsPersist.value.countDice;
});

const diceInArray = computed(() =>
  useMakeArray(
    userSettingsPersist.value.countDice,
    userSettingsPersist.value.invertOrder,
  ),
);

const diceInArrayRandom = ref<number[]>([]);

const play = () => {
  diceInArrayRandom.value = useSortRandom([...diceInArray.value]);
};

const stop = () => {
  Object.keys(diceData.value)
    .map(Number)
    .forEach((key) => {
      if (typeof key !== 'number' || isNaN(key)) {
        return;
      }

      diceData.value[key].diceTop = 0;
    });
};

export {
  useDice,
  diceCompletedList,
  diceCompleted,
  userSettingsPersist,
  diceInArray,
  diceInArrayRandom,
  play,
  stop,
  metaData,
};
