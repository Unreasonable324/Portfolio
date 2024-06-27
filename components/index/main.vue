<script setup lang="ts"></script>
<template>
  <div class="grid grid-cols-2 my-10 gap-[100px]">
    <div class="flex flex-col gap-6">
      <h2 class="text-6xl text-gradient">
        Привет!<br />
        меня зовут Андрей
      </h2>
      <p class="tracking-wide text-gradient text-xl">
        Я Frontend разработчик с более чем 3-летним опытом в разработке веб-приложений на Vue.js, я готов помочь вам создавать современные и
        интуитивно понятные пользовательские интерфейсы. Моя компетенция включает в себя разработку клиентской стороны с использованием фреймворка
        Vue.js
      </p>
      <div class="">
        <PrimeButton label="Check" icon="pi pi-check" />
      </div>
    </div>
    <div class="">
      <SvgMainSectionAnimation />
    </div>
  </div>
</template>
<style>
.text-gradient {
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 20%, rgba(255, 255, 255, 0.8) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
