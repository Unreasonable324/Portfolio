<script setup lang="ts">
import { useProjectsQuery } from './useProjectsQuery';

const { data, suspense, isLoading } = await useProjectsQuery();

await suspense();
</script>
<template>
     <div class=" flex flex-col gap-3">
         <UiTitle>Projects</UiTitle>
           <div class="grid grid-cols-3 gap-3" v-if="!isLoading">
             <CardsProject :item="item" v-for="item in data?.documents"></CardsProject>
           </div>
     </div>
</template>
<style></style>
