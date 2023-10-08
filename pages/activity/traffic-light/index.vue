<script setup lang="ts">
import {
  userSettingsPersist,
  play,
  stop,
  metaData,
} from './-source/useTrafficLight';
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

      <v-card-subtitle class="text-green-darken-4 text-bold font-weight-bold">
        Zelená
      </v-card-subtitle>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="userSettingsPersist.intervalGreenMin"
              type="number"
              label="Minimální doba zelené (vteřiny)"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="userSettingsPersist.intervalGreenMax"
              type="number"
              label="Maximální doba zelené (vteřiny)"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-card-subtitle class="text-red-darken-4 font-weight-bold">
        Červená
      </v-card-subtitle>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="userSettingsPersist.intervalRedMin"
              type="number"
              label="Minimální doba červené (vteřiny)"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="userSettingsPersist.intervalRedMax"
              type="number"
              label="Maximální doba červené (vteřiny)"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-card-subtitle class="font-weight-bold">Ostatní</v-card-subtitle>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-checkbox
              v-model="userSettingsPersist.enableBackground"
              label="Zobrazit barvy jako pozadí celé obrazovky"
              color="primary"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" md="6">
            <v-checkbox
              v-model="userSettingsPersist.enableTrafficLightImg"
              label="Zobrazit obrázek semaforu"
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
