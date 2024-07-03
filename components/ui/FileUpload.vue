<script setup lang="ts">
import type { PropType } from 'vue';

const fileUploaderRef = ref<any>(null);
const uploadFiles = ref<any>([]);
 defineProps({
  modelValue: {
    type: Array as PropType<File[] | String>,
  },
  init: {
    type: Array as PropType<{ image: string }[]>,
  },

});
const onChooseUploadFiles = () => {
  fileUploaderRef.value.choose();
};
const onSelectedFiles = (event: any) => {
    
  uploadFiles.value = event.files;
  emit("update:modelValue", uploadFiles.value);
};
const emit = defineEmits(["update:modelValue"]);

function clear() {
  uploadFiles.value = [];
  emit("update:modelValue", null);
}
</script>

<template>
    <PrimeFileUpload
      ref="fileUploaderRef"
      name="demo[]"
      :multiple="true"
      accept="image/*"
      customUpload
      @clear="clear"
      @select="onSelectedFiles"
    
      :cancelLabel="'Отменить'"
      :showUploadButton="false"
      :pt="{
        chooseButton: 'hidden',
        buttonbar: 'hidden',
        cancelButton: {
          root: { class: 'bg-red-500 border-red-700 border-solid ' },
        },
        root: { class: 'flex flex-col  ' },
        content: 'p-0 border-0',
      }"
    >
      <template v-if="uploadFiles.length > 0" #content>
        <div class="grid grid-cols-6 gap-2 px-[18px] pb-[18px]">
          <!-- <div
            @click="onChooseUploadFiles"
            class="flex flex-col flex-1 w-full h-full justify-center items-center shadow cursor-pointer rounded-[6px]"
            :style="{ cursor: 'copy', aspectRatio: '1/1' }"
          >
            <i class="pi pi-fw pi-plus text-4xl text-primary"></i>
          </div> -->
          <div
            class="flex relative rounded-[6px] overflow-hidden  shadow"
            v-for="file in uploadFiles"
            :style="{ cursor: 'copy', aspectRatio: '1/1' }"
          >
            <PrimeImage alt="Image" :src="file.objectURL" preview>
              <template #image>
                <img :src="file.objectURL" alt="image" class=" w-[100%] object-scale-down" />
              </template>
            </PrimeImage>
            <div
              class="w-[20px] h-[20px] flex items-center justify-center bg-black/35 absolute top-0 right-0 cursor-pointer text-[#ef4444]/35 duration-100 hover:bg-black/45 hover:text-[#ef4444]"
            >
              <i class="pi pi-fw pi-times text-primary" @click="uploadFiles.splice(uploadFiles.indexOf(file), 1)"></i>
            </div>
          </div>
        </div>
      </template>   
      <template #empty>
        <div class="grid grid-cols-6 gap-2">
          <!-- <div
            @click="onChooseUploadFiles"
            class="flex flex-col flex-1 w-full h-full justify-center items-center shadow cursor-pointer rounded-[6px]"
            :style="{ cursor: 'copy', aspectRatio: '1/1' }"
          >
            <i class="pi pi-fw pi-replay text-4xl text-primary" v-if="!!init?.length"></i>

            <i class="pi pi-fw pi-plus text-4xl text-primary" v-else></i>
          </div> -->
          <div class="flex relative rounded-[6px] overflow-hidden shadow" v-for="file in init">
            <PrimeImage alt="Image" :src="file.image" preview>
              <template #image>
                <img :src="file.image" alt="image" class=" w-[100%] object-scale-down" />
              </template>
            </PrimeImage>
          </div>
        </div>
      </template>
    </PrimeFileUpload>
</template>
<style scoped></style>
