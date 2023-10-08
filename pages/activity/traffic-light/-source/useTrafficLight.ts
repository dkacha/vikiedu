import { useStorage } from '@vueuse/core';
import { config } from './config';
import metaData from './metaData';

const { second } = useTime();

const isRed = ref(true);
const isPlaying = ref(false);

const { userSettings } = config;

const userSettingsPersist = useStorage(
  'userSettingsTrafficLights',
  userSettings,
);

let setTimeoutId = 0;

function nextSwitch() {
  const minTime =
    (isRed.value
      ? userSettingsPersist.value.intervalRedMin
      : userSettingsPersist.value.intervalGreenMin) * second;

  const maxTime =
    (isRed.value
      ? userSettingsPersist.value.intervalRedMax
      : userSettingsPersist.value.intervalGreenMax) * second;

  const timer = useRandomNumber(minTime, maxTime);

  setTimeoutId = window.setTimeout(() => {
    if (!isPlaying.value) return;

    isRed.value = !isRed.value;
    nextSwitch();
  }, timer);
}

const RED_COLOR = '#ff0000';
const GREEN_COLOR = '#00b300';

const backgrounColor = computed(() => {
  if (!userSettingsPersist.value.enableBackground) {
    return;
  }

  return isRed.value ? RED_COLOR : GREEN_COLOR;
});

function play() {
  isPlaying.value = true;
  nextSwitch();
}

function stop() {
  isPlaying.value = false;
  clearTimeout(setTimeoutId);
}

export {
  userSettingsPersist,
  play,
  stop,
  isPlaying,
  isRed,
  backgrounColor,
  RED_COLOR,
  GREEN_COLOR,
  metaData,
};
