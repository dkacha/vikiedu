<template>
  <link
    href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
    rel="stylesheet"
  />
  <v-app>
    <v-app-bar>
      <v-container class="d-flex">
        <v-app-bar-title>
          <NuxtLink to="/"> Vikiedu </NuxtLink>
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
