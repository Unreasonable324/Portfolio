<script setup lang="ts">
import { useAuth } from '~/stores/auth.store';

const router = useRouter();
const auth = useAuth();
</script>
<template>
  <div class="my-5" v-if="auth.isAuth">
    <div class="flex justify-end gap-4">
      <NuxtLink to="/add_stack"><PrimeButton label="Add stack" icon="pi pi-plus" size="small" /></NuxtLink>
      <NuxtLink to="/add_project"><PrimeButton label="Add project" icon="pi pi-plus" size="small" /></NuxtLink>
      <PrimeButton label="Exit" icon="pi pi-sign-out" @click="auth.logout(router)" size="small" />
    </div>
    <div class="">
      <Projects/>
    </div>
  </div>
  <div class="h-[calc(100vh-114px)]" v-else>
    <LayoutLoader class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
  </div>
</template>
<style></style>
