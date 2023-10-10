<script setup lang="ts">
import Fireworks from '@fireworks-js/vue';

const { state: audioEnabled } = useAudioConfig();
</script>

<template>
  <Fireworks
    class="fireworks"
    :options="{
      autoresize: false,
      sound: { enabled: audioEnabled, files: ['/audio/single-firework.mp3'] },
    }"
  />
</template>

<style lang="scss" scoped>
.fireworks {
  width: 100%;
  height: calc(100% - 300px);
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
