<script setup lang="ts">
import { useAuth } from '~/stores/auth.store';
import { links, nav } from './config';

const auth = useAuth();
const router  = useRouter();
</script>
<template>
  <div class="    py-3  fixed bg-[#0F1624] top-0 left-0 right-0">
    <div class="mx-auto max-w-[1280px] px-5 flex justify-between items-center w-full gap-12">
      <NuxtLink to="/">
        <div class="flex items-center gap-1 text-xl">
          <SvgLogo />
          Portfolio
        </div>
      </NuxtLink>
      <div class="justify-evenly flex-1 hidden sm:flex">
        <div class="" v-for="item in nav" :key="item.label">
          {{ item.label }}
        </div>
      </div>
      <div class="justify-between gap-3 hidden sm:flex">
        <div class="" v-for="item in links" :key="item.icon">
          <a :href="item.url" target="_blank">
            <i :class="`${item.icon}`" style="color: white; font-size: 2rem"></i>
          </a>
        </div>
      </div>
      <PrimeButton icon="pi pi-user" label="Admin" size="small" @click="router.push('/admin')" class="absolute z-[1102]" v-if="auth.isAuth" />
      <div class="sm:hidden">
        <LayoutBurgerButton />
      </div>
    </div>
  </div>
</template>
<style></style>
