<script setup lang="ts">
import { links, nav } from './config';

const isVisible = ref(false);
watch(isVisible, () => {
  if (isVisible.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
const handler = () => (isVisible.value = !isVisible.value);
</script>
<template>
  <div class="">
    <PrimeButton icon="pi pi-bars" size="small" @click="handler" class="absolute z-[1102]" />

    <PrimeDrawer v-model:visible="isVisible" header="Drawer" position="full" :pt="{ root: 'border-none  bg-[transparent]' }">
      <template #container="{ closeCallback }">
        <div class="bg-[#0F1624] flex flex-col px-5 py-4" style="height: calc(100dvh)">
          <div class="flex flex-col justify-center h-full gap-10 items-center">
            <div class="text-3xl text-white" v-for="item in nav($t)" :key="item.label">
              <a :href="item.hash" @click="closeCallback">{{ item.label }}</a>
            </div>
            <div class="flex gap-3">
              <div class="" v-for="item in links" :key="item.icon">
                <a :href="item.url" target="_blank">
                  <i :class="`${item.icon}`" style="color: white; font-size: 2rem"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </PrimeDrawer>
  </div>
</template>
<style></style>
