<script lang="ts" setup>
const { state, toggle } = useAudioConfig();
</script>

<template>
  <v-btn
    :prepend-icon="state ? 'mdi-volume-high' : 'mdi-volume-variant-off'"
    @click="toggle"
  >
    {{ state ? 'Vypnout' : 'Zapnout' }} zvuk
  </v-btn>
</template>

<style lang="scss" scoped>
.img-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
