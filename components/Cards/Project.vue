<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: "global" });
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
const activeIndex = ref(0);
const displayCustom = ref(false);

const clickImage = (img: string) => {
  activeIndex.value = props.item.images.findIndex((i: string) => i === img);
  displayCustom.value = true;
};
</script>
<template>
  <div class="border-slate-700 rounded-lg border flex flex-col min-w-[320px] items-stretch overflow-hidden">
    <ClientOnly>
      <template #fallback>
        <PrimeSkeleton class="w-full min-h-[300px] !bg-[#161f33]" />
      </template>
      <PrimeGalleria
        :value="item.images"
        :numVisible="5"
        :showThumbnails="false"
        :showIndicators="true"
        showIndicatorsOnItem
        v-model:activeIndex="activeIndex"
        :pt="{ root: '!border-none border-[#0F1624] ' , }"
      >
        <template #item="slotProps">
          <PrimeImage alt="Image" :src="slotProps.item" class="h-[300px] cursor-pointer !flex !items-center !justify-center"  @click="clickImage(slotProps.item)">
            <template #image>
              <NuxtImg alt="Image" :src="slotProps.item" class="w-[100%] object-scale-down" style="width: 100%; display: block"></NuxtImg>
            </template>
          </PrimeImage>
        </template> </PrimeGalleria
    ></ClientOnly>
    <div class="p-4 flex flex-col gap-3 flex-1">
      <UiTitle size="medium">{{ locale === "en" ? item.name_en : item.name }}</UiTitle>
      <UiSubtitle size="base">{{ locale === "en" ? item.description_en : item.description }}</UiSubtitle>

      <div class="flex flex-wrap gap-1">
        <UiTitle size="small" class="font-semibold" v-if="item.stack.length">Stack:</UiTitle>

        <div class="rounded-md overflow-hidden" v-for="i in item.stack">
          <img :src="i" alt="" />
        </div>
      </div>
      <div class="rounded-md overflow-hidden w-fit self-end mt-auto">
        <img :src="item.time_spent" alt="" class="w-[100%] object-cover" />
      </div>
    </div>
    <div class="w-full">
      <PrimeGalleria
        v-model:activeIndex="activeIndex"
        v-model:visible="displayCustom"
        :value="item.images"
        :numVisible="7"
        :circular="true"
        :fullScreen="true"
        :showItemNavigators="true"
        :showThumbnails="false"
        containerStyle="width: 100vw; height: calc(100vh ); border: none"
        :pt="{ mask: '!z-[1200]', item: '!h-[calc(100vh)]', items: '!items-center', closeButton: '!absolute right-5 top-5 z-[1200]',previousItemButton:'!absolute !bg-[#0F162466]',nextItemButton:'!absolute !bg-[#0F162466]' }"
      >
        <template #item="slotProps">
          <NuxtImg alt="Image" :src="slotProps.item" class="object-scale-down" style="width: 100%; height: auto; display: block"></NuxtImg>
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </PrimeGalleria>
    </div>
  </div>
</template>
<style></style>
