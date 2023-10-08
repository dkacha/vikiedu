<script setup lang="ts">
import { useDice, diceCompletedList, userSettingsPersist } from './useDice';

const props = defineProps<{
  value: number;
}>();

const handleUpdateDiceTarget = () => {
  const decideClientRect = refDiceTarget.value?.getBoundingClientRect();

  if (decideClientRect) {
    updateDiceTarget(decideClientRect);
  }
};

const { updateDiceTarget } = useDice(props.value);

const refDiceTarget = ref<HTMLElement | null>(null);

onMounted(handleUpdateDiceTarget);

window.addEventListener('resize', handleUpdateDiceTarget);

onUnmounted(() => {
  window.removeEventListener('resize', handleUpdateDiceTarget);
});
</script>

<template>
  <div
    ref="refDiceTarget"
    class="dice-target w-100 h-100 d-flex justify-center align-center"
    :class="{
      active: diceCompletedList.includes(props.value),
    }"
  >
    <template v-if="userSettingsPersist.helpNumber">
      {{ props.value }}
    </template>
  </div>
</template>

<style lang="scss" scoped>
.dice-target {
  border: 1px solid gray;
  font-size: 50px;
  color: gray;
  font-weight: bold;

  &.active {
    background: green;
  }
}
</style>
