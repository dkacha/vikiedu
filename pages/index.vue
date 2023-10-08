<script lang="ts" setup>
const activitiesMetaData = import.meta.glob('./**/metaData.ts', {
  eager: true,
});

type typeActivityMetaData = {
  id: string;
  title: string;
  description: string;
};

function typeGuardMetaData(obj: any): obj is { default: typeActivityMetaData } {
  return (
    obj &&
    typeof obj === 'object' &&
    'default' in obj &&
    typeof obj.default === 'object' &&
    typeof obj.default.id === 'string' &&
    typeof obj.default.title === 'string' &&
    typeof obj.default.description === 'string'
  );
}

const { data } = await useAsyncData(async () => {
  const activities: typeActivityMetaData[] = [];

  Object.keys(activitiesMetaData).forEach((key) => {
    const activityMetaData = activitiesMetaData[key];

    if (typeGuardMetaData(activityMetaData)) {
      activities.push(activityMetaData.default);
    }
  });

  return { activities };
});
</script>

<template>
  <v-row>
    <v-col class="mt-2" cols="12">
      <strong>Aktivity</strong>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      v-for="activitie in data?.activities"
      :key="activitie.id"
    >
      <v-card>
        <NuxtLink :to="'/activity/' + activitie.id">
          <img :src="`/${activitie.id}/cover.webp`" :alt="activitie.title" />
        </NuxtLink>
        <v-card-title>{{ activitie.title }}</v-card-title>
        <v-card-text>{{ activitie.description }}</v-card-text>
        <v-card-text>
          <v-btn :to="'/activity/' + activitie.id"> Detail </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
