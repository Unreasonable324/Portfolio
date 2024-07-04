import type { ModuleOptions } from 'nuxt/schema';
import { googleFontsConfig, primevueConfig, tailwindConfig } from './configs';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["primeicons/primeicons.css", "~/assets/index.css"],
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    ["@nuxtjs/tailwindcss", tailwindConfig],
    ["@nuxtjs/google-fonts", googleFontsConfig],
    "@primevue/nuxt-module",
   [ "@nuxt/image", { provider: "ipx" }],
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  primevue: primevueConfig as ModuleOptions,
});
