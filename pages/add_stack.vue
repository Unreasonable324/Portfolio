<script setup lang="ts">
import { ID } from 'appwrite';
import { COLLECTION_STACK_ID, DB_ID } from '~/app.constants';
import { useQueryClient } from '@tanstack/vue-query';

const queryClient = useQueryClient();
const DTO = ref({
  name: "",
  icon: "",
  category: "",
});
const categoriesStack = ["Design", "Other", "Database", "Framework", "Platform", "Language", "Library"];
const addStack = async () => {
  const id = ID.unique();
  await DB.createDocument(DB_ID, COLLECTION_STACK_ID, id, { ...DTO.value, id });
  queryClient.invalidateQueries({ queryKey: ["stack"] });
};
</script>
<template>
  <div class="">
    <div class="sticky top-1/2 -translate-y-1/2 z-10 p-5 left-0 w-1/2 -mt-[300px]">
      <div class="flex flex-col gap-3 px-10">
        <PrimeInputText label="name" placeholder="name" v-model="DTO.name" />
        <PrimeInputText label="icon" placeholder="icon" v-model="DTO.icon" />
        <PrimeSelect :options="categoriesStack" label="category" placeholder="category" v-model="DTO.category" />
        <PrimeButton label="Add stack" @click="addStack"></PrimeButton>
        <div class="rounded-md overflow-hidden flex w-fit self-center"><img :src="DTO.icon" alt="" class="" /></div>
      </div>
    </div>
    <div class="w-full flex justify-end my-10">
      <div class="mr-0 w-1/2"><IndexStack /></div>
    </div>
  </div>
</template>
<style></style>
