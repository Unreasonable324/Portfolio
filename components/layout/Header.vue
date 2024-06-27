<script setup lang="ts">
const nav = [
  { label: "Projects", to: "/" },
  { label: "About", to: "/about" },
  { label: "Stack", to: "/stack" },
];
const links = [
  { icon: "pi pi-github", url: "https://github.com/Unreasonable324" },
  { icon: "pi pi-telegram", url: "https://t.me/shumakov_epta" },
  { icon: "pi pi-envelope", url: "mailto:a8surd324@yandex.ru" },
];
</script>
<template>
  <div class="flex w-full gap-12 items-center py-3">
  <div class="flex items-center gap-1 text-xl">
    <SvgLogo/>
  Portfolio
  </div>
    <div class="flex justify-evenly flex-1">
      <div class="" v-for="item in nav" :key="item.label">
        {{ item.label }}
      </div>
    </div>
    <div class="flex justify-between gap-3">
      <div class="" v-for="item in links" :key="item.icon">
        <a :href="item.url" target="_blank">
          <i :class="`${item.icon}`" style="color: white; font-size: 2rem"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<style></style>
