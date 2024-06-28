<script setup lang="ts">
import { links, nav } from './config';

const isVisible = ref(false);
watch(isVisible, () => {
  if (isVisible.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
})
</script>
<template>
  <div class="">
    <PrimeButton icon="pi pi-bars" size="small" @click="isVisible = !isVisible" class="absolute z-[1102]"/>

    <PrimeDrawer v-model:visible="isVisible" header="Drawer" position="full" :pt="{ root: 'border-none pt-[72px] bg-[transparent]' }" >
      <template #container="{ closeCallback }">
        <div class="bg-[#0F1624]  flex flex-col px-5 py-4" style="height:calc(100dvh - 72px)">
          <!-- <PrimeButton icon="pi pi-bars" size="small" @click="isVisible = !isVisible" class="self-end h-[40px]" /> -->
          <div class=" flex flex-col justify-center h-full gap-10 items-center">
              <div class="text-3xl text-white" v-for="item in nav" :key="item.label">
                {{ item.label }}
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
