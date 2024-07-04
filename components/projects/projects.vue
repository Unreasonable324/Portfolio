<script setup lang="ts">
import { useProjectsQuery } from './useProjectsQuery';

const { data, suspense, isLoading } = await useProjectsQuery();

await suspense();

const test = (array: any[] | undefined, count: number) => {
  if (!array) return [];
  const result: any[][] = new Array(count).fill([]).map(() => []);
  for (let i = 0; i < array.length; i++) {
    result[i % count].push(array[i]);
  }
  return result;
};
</script>
<template>
  <div class="flex flex-col gap-3" v-if="!isLoading">
    <UiTitle>Projects</UiTitle>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-3" v-if="!isLoading">
      <CardsProject :item="item" v-for="item in data?.documents"></CardsProject>
    </div>
  </div>
</template>
<style></style>
