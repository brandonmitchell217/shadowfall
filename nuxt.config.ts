// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
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
    "nuxt-icon",
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
