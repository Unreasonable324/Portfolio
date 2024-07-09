<script setup lang="ts">
import { ID, type Models } from 'appwrite';
import {
  COLLECTION_PROJECTS_ID,
  DB_ID,
  STORAGE_IMAGES_ID,
} from '~/app.constants';
import { useStackQuery } from '~/components/stack/useStackQuery';
import type { iProject, iStack } from '~/types';
import { createImageUrl } from '~/utils/appwrite';

const File = ref<InstanceType<any> | null>(null);
const { data, suspense, isLoading } = await useStackQuery();
await suspense();

const DTO = ref<iProject>({
  name: "",
  name_en:"",
  description: "",
  description_en: "",
  stack: [],
  time_spent: "",
  images: [],
  create_date: "",
});
const images = ref<any[]>([]);
const stack = ref<iStack[]>([]);

const router = useRouter();
const addProject = async () => {
  const promises = images.value.map((e) => storage.createFile(STORAGE_IMAGES_ID, ID.unique(), e));
  const resp = (await Promise.allSettled(promises)) as PromiseFulfilledResult<Models.File>[];
  const urls = resp.map((e: PromiseFulfilledResult<Models.File>) => createImageUrl(e.value.$id));
  DTO.value.images = urls;
  DTO.value.stack = stack.value.map((e) => e.icon);
  DTO.value.create_date = new Date().toISOString();
  const id = ID.unique();
  await DB.createDocument(DB_ID, COLLECTION_PROJECTS_ID, id, DTO.value);
  router.push("/admin");
};
const isEmpty = computed(() => [Object.values(DTO.value).every((e) => !e.length), !images.value.length, !stack.value.length].every((e) => e));
</script>
<template>
  <div class="grid grid-cols-2 gap-3 items-center min-h-[calc(100vh-100px)] my-5">
    <div class="flex flex-col gap-3">
      <UiTitle  class="font-semibold">Add project</UiTitle>

      <PrimeInputText placeholder="name" v-model="DTO.name" class="inputCustomTheme"/>
      <PrimeInputText placeholder="name_en" v-model="DTO.name_en" class="inputCustomTheme"/>
      <PrimeTextarea placeholder="description" v-model="DTO.description" rows="5" :resize="false" class="inputCustomTheme"/>
      <PrimeTextarea placeholder="description_en" v-model="DTO.description_en" rows="5" :resize="false" class="inputCustomTheme"/>
      <PrimeMultiSelect
        :options="data?.documents"
        placeholder="stack"
        optionLabel="name"
        :loading="isLoading"
        display="chip"
        filter
        :maxSelectedLabels="5"
        v-model="stack"
        class="inputCustomTheme"
      />
      <PrimeInputText placeholder="time_spent" v-model="DTO.time_spent" class="inputCustomTheme"/>
      <UiFileUpload v-model="images" :init="images" ref="File" />

      <PrimeButton label="Add project" @click="addProject"></PrimeButton>
    </div>
    <div class="" v-if="!isEmpty">
      <CardsProject :item="{ ...DTO, images: images.map((e) => e.objectURL), stack: stack.map((e) => e.icon) }"></CardsProject>
    </div>
  </div>
</template>
<style></style>
