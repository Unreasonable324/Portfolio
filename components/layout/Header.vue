<script setup lang="ts">
import { useAuth } from '~/stores/auth.store';
import { links, nav } from './config';

const auth = useAuth();
const router = useRouter();
</script>
<template>
  <div class="py-3 fixed bg-[#0F1624] top-0 left-0 right-0 z-[1102]">
    <div class="mx-auto max-w-[1280px] px-5 flex  items-center w-full sm:gap-8 gap-3">
      <NuxtLink to="/" class="flex-1 sm:flex-none">
        <div class="flex gap-1 items-center text-xl ">
          <SvgLogo />
          Portfolio
        </div>
      </NuxtLink>
      <div class="justify-evenly flex-1 hidden gap-2 sm:flex">
        <div class="" v-for="item in nav($t)" :key="item.label">
          <!-- <NuxtLink :to="{ path: item.to, hash: item.hash }" :external="true"> {{ item.label }}</NuxtLink> -->
          <a :href="item.hash">{{ item.label }}</a>
        </div>
      </div>
      <div class="justify-between gap-3 hidden sm:flex">
        <div class="" v-for="item in links" :key="item.icon">
          <a :href="item.url" target="_blank">
            <i :class="`${item.icon}`" style="color: white; font-size: 32px; line-height: 44px"></i>
          </a>
        </div>
      </div>
      <div class="sm:hidden flex gap-3">
        <LayoutBurgerButton />
      </div>
      <PrimeButton icon="pi pi-user" label="Admin" size="small" @click="router.push('/admin')" class="absolute z-[1102]" v-if="auth.isAuth" />
      <UiLocales />
    </div>
  </div>
</template>
<style></style>
