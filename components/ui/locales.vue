<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: "global" });

const handler = () => {
  locale.value = locale.value === "en" ? "ru" : "en";
  localStorage.setItem("lang", locale.value);
};
</script>
<template>
  <PrimeButton @click="handler" severity="secondary" size="small" outlined>
    <div class="flex gap-1 items-center">
      <i class="pi pi-globe" style="color: white; font-size: 18px"></i>
      <UiTitle size="small">
        {{ $t("language") }}
      </UiTitle>
    </div>
  </PrimeButton>
</template>
<style></style>
