<script setup lang="ts">
import { useSound } from '@vueuse/sound';
import Fireworks from '@fireworks-js/vue';

import {
  diceCompleted,
  diceInArray,
  diceInArrayRandom,
  userSettingsPersist,
} from './useDice';
import DiceDragDrop from './DiceDragDrop.vue';
import DiceTarget from './DiceTarget.vue';

const { play: playAudioDice } = useSound('/audio/dice.mp3');
const { play: playAudioWin } = useSound('/audio/win.mp3');
const { state: audioEnabled } = useAudioConfig();

window.setTimeout(() => {
  if (audioEnabled.value) {
    playAudioDice();
  }
}, 200); // TODO: FIX

watch(diceCompleted, () => {
  if (diceCompleted.value && audioEnabled.value) {
    playAudioWin();
  }
});

const typeGuardCheckNumbersFromDie = (
  value: number,
): value is typeNumbersFromDie => {
  return [1, 2, 3, 4, 5, 6].includes(value);
};
</script>

<template>
  <v-container class="dice-area">
    <Fireworks
      v-if="diceCompleted"
      class="fireworks"
      :options="{ autoresize: false }"
    />
    <v-row class="h-100">
      <v-col
        v-for="oneDice in diceInArrayRandom"
        :key="oneDice"
        cols="4"
        class="d-flex justify-center align-center h-50"
      >
        <dice-drag-drop
          v-if="typeGuardCheckNumbersFromDie(oneDice)"
          :value="oneDice"
        />
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="target-area">
    <v-row class="h-100">
      <v-col
        v-for="oneDice in diceInArray"
        :key="oneDice"
        :cols="12 / userSettingsPersist.countDice"
      >
        <DiceTarget :value="oneDice" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.dice-area {
  height: calc(100% - 300px);
  user-select: none;
}

.fireworks {
  width: 100%;
  height: calc(100% - 300px);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
}

.target-area {
  height: 275px;
  border-top: 2px solid red;
}

.dice-col {
  display: flex;
  justify-content: center;
}
</style>
