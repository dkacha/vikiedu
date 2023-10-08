<script lang="ts" setup>
import { useMagicKeys, useFullscreen } from '@vueuse/core';

const emit = defineEmits<{
  play: [];
  stop: [];
}>();

const playing = ref(false);

const {
  isFullscreen,
  enter: fullscreenEnter,
  exit: fullscreenExit,
} = useFullscreen();

function play() {
  playing.value = true;
  emit('play');
  fullscreenEnter();
}

function stop() {
  playing.value = false;
  emit('stop');
  fullscreenExit();
}

watch(isFullscreen, (value) => {
  if (value === false) {
    stop();
  }
});

// fallback for browsers that don't support fullscreen
const keys = useMagicKeys();
watch(keys.escape, stop);
</script>

<template>
  <v-btn v-if="!playing" size="x-large" variant="elevated" @click="play"
    >Spustit</v-btn
  >

  <Teleport v-else to="body">
    <div class="player">
      <slot />
      <div class="controls">
        <audio-control class="mr-6" />
        <v-btn prepend-icon="mdi-close-circle" @click="stop"> Ukončit </v-btn>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.player {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
}

.controls {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(#000, 0.5);
  padding: 5px;
  border-radius: 5px 5px 0 0;
  opacity: 0.4;
  transition: 0.3s opacity;

  &:hover {
    opacity: 1;
  }
}

.control-btn {
  background: rgba(#000, 0.5);
}
</style>
