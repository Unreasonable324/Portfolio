<script setup lang="ts">
import { useAuth } from '~/stores/auth.store';

const auth = useAuth();
const router = useRouter();

const DTO = ref({
  email: "",
  password: "",
});
</script>
<template>
  <div class="flex items-center justify-center" :style="{ height: 'calc(100vh - 72px)' }">
    <div class="border-slate-700 rounded-lg border p-4 flex flex-col gap-4 min-w-[320px] items-stretch">
      <PrimeInputText v-model="DTO.email" placeholder="Email" class="inputCustomTheme" />
      <PrimePassword v-model="DTO.password" placeholder="Password" :feedback="false" toggleMask inputClass="w-full inputCustomTheme" />
      <PrimeButton label="login" @click="auth.login(DTO, router)" />
    </div>
  </div>
</template>
<style></style>
