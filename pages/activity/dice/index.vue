<script setup lang="ts">
import { userSettingsPersist, play, stop, metaData } from './-source/useDice';
import activity from './-source/activity.vue';
</script>

<template>
  <ActivityHeader
    :title="metaData.title"
    :description="metaData.description"
    :img-cover="`/${metaData.id}/cover.webp`"
  />

  <client-only>
    <v-card class="mt-4">
      <v-card-title>Nastavení</v-card-title>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="userSettingsPersist.countDice"
              type="number"
              max="6"
              label="Počet kostek (maximálně 6)"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-checkbox
              v-model="userSettingsPersist.invertOrder"
              label="Seřadit od největší po nejmenší"
              color="primary"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" md="4">
            <v-checkbox
              v-model="userSettingsPersist.helpNumber"
              label="Zobrazit čísla v cíli"
              color="primary"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>

      <div class="d-flex justify-center pb-7">
        <player-activity @play="play" @stop="stop">
          <activity />
        </player-activity>
      </div>
    </v-card>
  </client-only>
</template>
