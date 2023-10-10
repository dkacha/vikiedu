<template>
  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
  <v-app>
    <v-app-bar>
      <v-container class="d-flex">
        <v-app-bar-title>
          <NuxtLink class="logo" to="/"> Vikiedu </NuxtLink>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <audio-control />
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-2">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  text-transform: uppercase;
  color: #009299;
  display: inline-block;
  font-size: 25px;
  margin-top: 4px;
}
</style>
