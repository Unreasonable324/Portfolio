<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ru } from '@/app.constants';
import { sortingCategory, sortLight, useStackQuery } from './useStackQuery';

const { locale } = useI18n({ useScope: "global" });
const { data, suspense, isLoading } = await useStackQuery();

await suspense();
</script>
<template>
  <div class="flex flex-col gap-3">
    <UiTitle>{{ $t("stack") }}</UiTitle>
    <div class="flex flex-col gap-3" v-if="!isLoading">
      <div class="flex flex-col gap-2" v-for="(value, key) in sortingCategory(data?.documents)" :key="key">
        <UiTitle size="medium">{{ locale === "ru" ? ru[key as keyof typeof ru] : key }}</UiTitle>
        <div class="flex flex-wrap gap-2">
          <div class="rounded-md overflow-hidden" v-for="item in sortLight(value)" :key="item.id">
            <img :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
