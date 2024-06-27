// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["primeicons/primeicons.css", 
    // "@primevue/themes/primevue.min.css", 
    // "@primevue/themes/aura-dark-green/theme.css"
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [[
    "@nuxtjs/tailwindcss",
    {
      config: {
        theme: {
          fontFamily: {
            Play: ["Play", "cursive"],
          },
        },
      },
    },
  ], [
    "@nuxtjs/google-fonts",
    {
      families: {
        Play: [400, 500, 600, 700],
      },
    },
  ], "@primevue/nuxt-module", "@nuxt/image"],
  primevue: {
    usePrimeVue: true,
    importTheme: { from: '@/myTheme.ts' },
    options: {
      
      ripple: true,
      inputVariant: "filled",
    },
    components: {
      prefix: "Prime",
      include: ["Button"],
    },
    directives: {
      include: ['Ripple', 'Tooltip']
  }
  },
});