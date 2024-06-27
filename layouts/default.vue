<script setup lang="ts"></script>
<template>
  <div class="bg-[#0F1624] text-white text-lg font-medium font-Play">
    <div class="mx-auto max-w-[1280px] flex flex-col min-h-screen">
      <LayoutHeader/>
      <div class="flex-1">
          <slot></slot>
      </div>
    </div>
  </div>
</template>
<style></style>
