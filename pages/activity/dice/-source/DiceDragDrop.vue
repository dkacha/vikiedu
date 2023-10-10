<script setup lang="ts">
import type { GTDiceNumbers } from '@/types/dice';
import { useDraggable } from '@vueuse/core';
import { useDice } from './useDice';

const props = defineProps<{
  value: GTDiceNumbers;
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
    class="dice"
    :style="[style, { position: x === 0 && y === 0 ? 'relative' : 'fixed' }]"
  >
    <Dice :value="value" />
  </div>
</template>

<style lang="scss" scoped>
.dice {
  user-select: none;
  touch-action: none;
}
</style>
