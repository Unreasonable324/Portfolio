<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="border-slate-700 rounded-lg border flex flex-col  min-w-[320px] items-stretch">
  <!-- <div class="w-10 h-10" v-for="img in item.images">
  <img :src="img" alt="">
  </div> -->
    <PrimeGalleria
      :value="item.images"
      :numVisible="5"
      :showThumbnails="false"
      :showIndicators="true"
      showIndicatorsOnItem
      :pt="{ root: 'border-none' }"
    >
      <template #item="slotProps">
        <PrimeImage alt="Image" :src="slotProps.item" preview class="h-[300px]">
          <template #image>
          <NuxtImg  alt="Image" :src="slotProps.item" provider="ipx"class="w-[100%] object-scale-down" style="width: 100%; display: block"></NuxtImg >
          </template>
        </PrimeImage>
      </template>
    </PrimeGalleria>
    <div class="p-4 flex flex-col gap-3 flex-1">
      <UiTitle size="medium">{{ item.name }}</UiTitle>
      <UiSubtitle size="base">{{ item.description }}</UiSubtitle>

      <div class="flex flex-wrap gap-1">
        <UiTitle size="small" class="font-semibold">Stack:</UiTitle>

        <div class="rounded-md overflow-hidden" v-for="i in item.stack">
          <img :src="i" alt="" />
        </div>
      </div>
      <div class="rounded-md overflow-hidden w-fit self-end mt-auto">
        <img :src="item.time_spent" alt="" class="w-[100%] object-cover" />
      </div>
    </div>
  </div>
</template>
<style></style>
