<script setup lang="ts"></script>
<template>
  <div class="grid grid-cols-[1fr] xl:grid-cols-[auto_1fr] gap-[100px] items-center">
    <div class="flex flex-col gap-6 h-full">
      <UiTitle>
        Привет!<br />
        меня зовут Андрей</UiTitle
      >
      <UiSubtitle>
        Я Frontend разработчик с более чем 3-летним опытом в разработке веб-приложений на Vue.js, я готов помочь вам создавать современные и
        интуитивно понятные пользовательские интерфейсы. Моя компетенция включает в себя разработку клиентской части приложения с использованием
        фреймворка Vue.js
      </UiSubtitle>

      <div class="mt-auto">
        <a :href="cvLink" target="_blank">
          <PrimeButton>
            <div
              class="bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_20%,#ffffff_130%)] h-full w-[28px] rounded-full flex items-center justify-center"
            >
            <UiTitle size="small">hh</UiTitle>
            </div>
            <div class="">Резюме</div>
          </PrimeButton>
        </a>
      </div>
    </div>
    <div class="max-h-[500px] hidden xl:block">
      <SvgMainSectionAnimation />
    </div>
  </div>
</template>
<style></style>
