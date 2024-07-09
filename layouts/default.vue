<script setup lang="ts">
const isLoading = ref(false);
onMounted(() => {
  isLoading.value = true;
});
</script>
<template>
  <div class="bg-[#0F1624] text-white text-lg font-medium font-Play block">
    <div class="mx-auto max-w-[1280px] px-5 flex flex-col min-h-screen" v-show="isLoading">
      <LayoutHeader />
      <div class="flex-1 mt-[72px]">
        <slot></slot>
      </div>
    </div>
    <div class="h-screen" v-show="!isLoading">
      <LayoutLoader class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
</template>
<style></style>
