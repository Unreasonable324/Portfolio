<script setup lang="ts">
import { useAuth } from '~/stores/auth.store';

const auth = useAuth();
onMounted(() => {
  auth.get_me();
})
const router = useRouter();
</script>
<template>
  <div class="">
    <div class="flex justify-end gap-4">
      <NuxtLink to="/add_stack"><PrimeButton label="Add stack" icon="pi pi-plus"  size="small"/></NuxtLink>
      <NuxtLink to="/add_project"><PrimeButton label="Add project" icon="pi pi-plus"  size="small"/></NuxtLink>
      <PrimeButton label="Exit" icon="pi pi-sign-out" @click="auth.logout(router)" size="small" />
    </div>
  </div>
</template>
<style></style>
