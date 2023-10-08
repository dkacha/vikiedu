<script setup lang="ts">
import { useSound } from '@vueuse/sound';
import {
  userSettingsPersist,
  isRed,
  backgrounColor,
  RED_COLOR,
  GREEN_COLOR,
} from './useTrafficLight';

const { play: playAudio } = useSound('/audio/trafficLight.mp3');
const { state: audioEnabled } = useAudioConfig();

watch(isRed, () => {
  if (audioEnabled.value) {
    playAudio();
  }
});
</script>

<template>
  <div class="color-canvas" :style="{ background: backgrounColor }">
    <div
      v-if="userSettingsPersist.enableTrafficLightImg"
      class="traffic-lights"
    >
      <div
        class="light"
        :style="{ background: isRed ? RED_COLOR : undefined }"
      />
      <div
        class="light light--bottom"
        :style="{ background: !isRed ? GREEN_COLOR : undefined }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: background 0.3s;
}

.traffic-lights {
  background: #000;
  position: fixed;
  height: 80%;
  aspect-ratio: 1 / 2;
  border-radius: 10px;
}

.light {
  background: rgba(#fff, 0.2);
  width: 86%;
  padding-top: 86%;
  position: absolute;
  top: 5%;
  left: 7%;
  border-radius: 50%;
  transition: background 0.3s;

  &--bottom {
    top: auto;
    bottom: 5%;
  }
}
</style>
