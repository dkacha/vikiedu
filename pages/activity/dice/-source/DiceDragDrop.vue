<script setup lang="ts">
import { useDraggable } from '@vueuse/core';
import { useDice } from './useDice';

const props = defineProps<{
  value: typeNumbersFromDie;
}>();

const { updateDiceData } = useDice(props.value);

const refDice = ref<HTMLElement | null>(null);

const { x, y, style } = useDraggable(refDice, {
  onEnd(position, event) {
    const diceRect = refDice.value?.getBoundingClientRect();
    if (diceRect) {
      updateDiceData(diceRect);
    }
  },
});
</script>

<template>
  <div
    ref="refDice"
    :style="[style, { position: x === 0 && y === 0 ? 'relative' : 'fixed' }]"
  >
    <Dice :value="value" />
  </div>
</template>

<style lang="scss" scoped>
.dice {
  cursor: grabbing;
}
</style>
