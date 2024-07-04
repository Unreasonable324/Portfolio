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
            <img :src="slotProps.item" alt="image" class="w-[100%] object-scale-down" style="width: 100%; display: block" />
          </template>
        </PrimeImage>
      </template>
    </PrimeGalleria>
    <div class="p-4 flex flex-col gap-3">
      <UiTitle size="medium">{{ item.name }}</UiTitle>
      <UiSubtitle size="base">{{ item.description }}</UiSubtitle>

      <div class="flex flex-wrap gap-1">
        <UiTitle size="small" class="font-semibold">Stack:</UiTitle>

        <div class="rounded-md overflow-hidden" v-for="i in item.stack">
          <img :src="i" alt="" />
        </div>
      </div>
      <div class="rounded-md overflow-hidden w-fit self-end">
        <img :src="item.time_spent" alt="" class="w-[100%] object-cover" />
      </div>
    </div>
  </div>
</template>
<style></style>
