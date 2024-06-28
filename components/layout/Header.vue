<script setup lang="ts">
import { links, nav } from './config';
</script>
<template>
  <div class="flex w-full gap-12 items-center py-3 justify-between">
  <div class="flex items-center gap-1 text-xl">
    <SvgLogo/>
  Portfolio
  </div>
    <div class=" justify-evenly flex-1 hidden sm:flex">
      <div class="" v-for="item in nav" :key="item.label">
        {{ item.label }}
      </div>
    </div>
    <div class=" justify-between gap-3  hidden sm:flex">
      <div class="" v-for="item in links" :key="item.icon">
        <a :href="item.url" target="_blank">
          <i :class="`${item.icon}`" style="color: white; font-size: 2rem"></i>
        </a>
      </div>
    </div>
    <div class="sm:hidden ">
  
      <LayoutBurgerButton/>
    
    </div>
  </div>
</template>
<style></style>
