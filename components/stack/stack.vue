<script setup lang="ts">
import { useStackQuery } from './useStackQuery';

const page = ref(0);




const { data, suspense,isLoading } = await useStackQuery(page)

await suspense();
const handler = (item: any) => {
  page.value = item - 1;
};
</script>
<template>
  {{ page }}{{ isLoading }}
  <div class="bg-red-500">
    <pre>{{ data }}</pre>
  </div>
  <div class="flex gap-2">
    <button v-for="item in data?.total" class="p-3 bg-red-300" @click="handler(item)">{{ item }}</button>
  </div>
</template>
<style></style>
