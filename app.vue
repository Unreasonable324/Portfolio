<script setup lang="ts">
import { useAuth } from './stores/auth.store';

const route = useRoute();
const router = useRouter();

const auth = useAuth();
onMounted(() => {
  if (route.name !== "index") {
  auth.get_me(router);
}

})
if (process.client) {
  const localeStorageLang = localStorage.getItem("lang");
// if (localeStorageLang) {
  useI18n().locale.value = localeStorageLang || "ru";
// }
}
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
