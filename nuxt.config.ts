// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/index.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "EMJAY",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  i18n: {
    lazy: true,
    langDir: "data/locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "de-DE",
        name: "Deutsch",
        file: "de-DE.json",
      },
    ],
    defaultLocale: "en-US",
  },
});
