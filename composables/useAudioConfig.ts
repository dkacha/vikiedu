import { useStorage } from '@vueuse/core';

const stateEnableAudio = useStorage('useAudioConfig', {
  state: true,
});

export const useAudioConfig = () => ({
  state: computed(() => stateEnableAudio.value.state),
  enable() {
    stateEnableAudio.value.state = true;
  },
  disable() {
    stateEnableAudio.value.state = false;
  },
  toggle() {
    console.log('toggle', stateEnableAudio);
    stateEnableAudio.value.state = !stateEnableAudio.value.state;
  },
});
