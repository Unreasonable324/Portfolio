<script setup lang="ts"></script>
<template>
  <div class="bg-[#0F1624] text-white text-lg font-medium font-Play">
    <div class="mx-auto max-w-[1280px] px-5 flex flex-col min-h-screen">
      <LayoutHeader/>
      <div class="flex-1 mt-[72px]">
          <slot></slot>
      </div>
    </div>
  </div>
</template>
<style></style>
