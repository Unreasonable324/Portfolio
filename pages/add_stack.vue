<script setup lang="ts">
import { ID } from 'appwrite';
import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import { useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient();
const DTO = ref({
  name: "NUXT.JS",
  icon: "https://img.shields.io/badge/Nuxt-35495E?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82",
  category: "Framework",
});
const categoriesStack = ["Design", "Other", "Database", "Framework", "Platform", "Language", "Library"];
const addStack = async () => {
  const id = ID.unique();
  await DB.createDocument(DB_ID, COLLECTION_STACK_ID, id, { ...DTO.value, id });
  queryClient.invalidateQueries({ queryKey: ['stack'] })
};
</script>
<template>
  <div class="grid grid-cols-2">
    <div class="flex justify-center mt-[200px]">
      <div class="flex flex-col gap-3 w-1/2">
        <PrimeInputText label="name" placeholder="name" v-model="DTO.name" />
        <PrimeInputText label="icon" placeholder="icon" v-model="DTO.icon" />
        <PrimeSelect :options="categoriesStack" label="category" placeholder="category" v-model="DTO.category" />
        <PrimeButton label="Add stack" @click="addStack"></PrimeButton>

        <div class="rounded-md overflow-hidden flex w-fit self-center"><img :src="DTO.icon" alt="" class="" /></div>
      </div>
    </div>
    <div class=""><IndexStack /></div>
  </div>
</template>
<style></style>
