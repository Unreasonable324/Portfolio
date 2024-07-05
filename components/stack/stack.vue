<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useStackQuery } from './useStackQuery';

const { locale } = useI18n({ useScope: "global" });
const { data, suspense, isLoading } = await useStackQuery();

await suspense();
enum ru {
  Design = "Дизайн",
  Other = "Другое",
  Database = "Базы данных",
  Framework = "Фреймворки",
  Platform = "Платформы",
  Language = "Языки",
  Library = "Библиотеки",
}
const sortingCategory = (items: any):{[key: string]: any} =>
  items.reduce((acc: any, curr: any) => {
    acc[curr.category] = [...(acc[curr.category] || []), curr];
    return acc;
  }, {});

const sortLight = (items: any) => items.sort((a: any, b: any) => b.name.length - a.name.length);
</script>
<template>
  <div class="flex flex-col gap-3">
  <UiTitle>{{ $t("stack") }}</UiTitle>
    <div class="flex flex-col gap-3" v-if="!isLoading">
      <div class="flex flex-col gap-2" v-for="(value, key) in sortingCategory(data?.documents)">
        <UiTitle size="medium">{{ locale === "ru" ? ru[key as keyof typeof ru] : key }}</UiTitle>
        <div class="flex  flex-wrap gap-3">
          <div class="rounded-md overflow-hidden" v-for="item in sortLight(value)">
            <img :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
