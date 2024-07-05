<script setup lang="ts">
import { useProjectsQuery } from './useProjectsQuery';

const { data, suspense, isLoading } = await useProjectsQuery();

await suspense();


</script>
<template>
  <div class="flex flex-col gap-3" >
    <UiTitle>{{ $t("projects") }}</UiTitle>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3" >
      <CardsProject :item="item" v-for="item in data?.documents"/>
    </div>
  </div>
</template>
