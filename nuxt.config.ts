// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Michroma: true,
          Inconsolata: true,
        },
      },
    ],
    "@vueuse/nuxt",
    "nuxt-svgo",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.scss"],
  svgo: {
    defaultImport: "component",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
