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
    ["@nuxt/image", { provider: "ipx" }],
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-yandex-metrika"
  ],
  yandexMetrika: {
    id: '97811733',
    // debug: process.env.NODE_ENV !== "production",
    // delay: 0,
    // cdn: false,
    // verification: null, // Verification in Yandex Webmaster
    // options: {
    //  webvisor: true
    // },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  i18n: {
    vueI18n: "./plugins/i18n.ts",
  },
  primevue: primevueConfig as ModuleOptions,
});
