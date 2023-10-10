<script lang="ts" setup>
import type { GTDiceNumbers } from '@/types/dice';

const props = defineProps<{
  value: GTDiceNumbers;
}>();

const sidesCubeConfig: Record<GTDiceNumbers, { y: number; x: number }> = {
  1: {
    y: 0,
    x: 360,
  },
  2: {
    y: 90,
    x: 0,
  },
  3: {
    y: 0,
    x: 90,
  },
  4: {
    y: 0,
    x: 270,
  },
  5: {
    y: 270,
    x: 0,
  },
  6: {
    y: 180,
    x: 0,
  },
};

const rotateY = ref(useRandomRotate());
const rotateX = ref(useRandomRotate());
const rotateZ = ref(useRandomRotate());

const rotateCorrectDie = () => {
  rotateY.value = sidesCubeConfig[props.value].y.toString() + 'deg';
  rotateX.value = sidesCubeConfig[props.value].x.toString() + 'deg';
  rotateZ.value = '0deg';
};

window.setTimeout(rotateCorrectDie, 10);
</script>

<template>
  <div
    class="dice set-1"
    :style="{
      transform: `rotateY(${rotateY}) rotateX(${rotateX}) rotateZ(${rotateZ})`,
    }"
  >
    <div class="side one" />
    <div class="side two" />
    <div class="side three" />
    <div class="side four" />
    <div class="side five" />
    <div class="side six" />
  </div>
</template>

<style lang="scss" scoped>
.dice {
  font-size: clamp(1px, 0.55vw, 10px);
  position: relative;
  width: 20em;
  height: 20em;
  transform-style: preserve-3d;
  transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  transition: transform 1s ease-out;
}

.side {
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  &:before {
    content: '';
    width: 20%;
    height: 20%;
    background: #fff;
    border-radius: 50%;
  }
}
.base {
  width: 100%;
  height: 100%;
  transform: translateY(7.3em) rotateX(90deg);
  border: 0;
  background: blue;
}
.one {
  transform: translateZ(10em);
}
.two {
  transform: translateX(-10em) rotateY(-90deg);
  &:before {
    background: transparent;
    box-shadow: #fff -5em -5em 0px 0px, #fff 5em 5em 0px 0px;
  }
}
.three {
  transform: translateY(10em) rotateX(90deg);
  &:before {
    box-shadow: #fff -5em 5em 0px 0px, #fff 5em -5em 0px 0px;
  }
}
.four {
  transform: translateY(-10em) rotateX(90deg);
  &:before {
    background: transparent;
    box-shadow: #fff -5em 5em 0px 0px, #fff -5em -5em 0px 0px,
      #fff 5em 5em 0px 0px, #fff 5em -5em 0px 0px;
  }
}
.five {
  transform: translateX(10em) rotateY(90deg);
  &:before {
    box-shadow: #fff -5em -5em 0px 0px, #fff -5em 5em 0px 0px,
      #fff 5em -5em 0px 0px, #fff 5em 5em 0px 0px;
  }
}
.six {
  transform: translateZ(-10em);
  &:before {
    background: transparent;
    box-shadow: #fff -5em -5em 0px 0px, #fff -5em 0px 0px 0px,
      #fff -5em 5em 0px 0px, #fff 5em -5em 0px 0px, #fff 5em 0px 0px 0px,
      #fff 5em 5em 0px 0px;
  }
}
</style>
