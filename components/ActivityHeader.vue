<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  imgCover: string;
}>();
</script>

<template>
  <v-card>
    <img class="img-cover" :src="imgCover" :alt="title" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.img-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
