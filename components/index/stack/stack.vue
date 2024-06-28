<script setup lang="ts">
import { useStackQuery } from './useStackQuery';

const { data, suspense, isLoading } = await useStackQuery();

await suspense();

enum category {
  Design = "Design",
  Other = "Other",
  Database = "Database",
  Framework = "Framework",
  Platform = "Platform",
  Language = "Language",
  Library = "Library",
}
const sortingCategory = (items: any) =>
  items.reduce((acc: any, curr: any) => {
    acc[curr.category] = [...(acc[curr.category] || []), curr];
    return acc;
  }, {});

const sortLight = (items: any) => items.sort((a: any, b: any) => b.name.length - a.name.length);
</script>
<template>
  <div class="flex flex-col gap-3">
    <div class="text-6xl text-gradient">Stack</div>
    <div class="flex flex-col gap-3" v-if="!isLoading">
      <div class="flex flex-col gap-2" v-for="(value, key) in sortingCategory(data?.documents)">
        <div class="text-3xl text-gradient">{{ key }}</div>
        <div class="flex flex-wrap gap-3">
          <div class="rounded-md overflow-hidden" v-for="item in sortLight(value)">
            <img :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
