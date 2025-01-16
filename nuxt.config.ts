import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@pinia/nuxt", "@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/content", "@nuxt/eslint"],

  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "java", "json", "bash", "python", "vue"],
    },
  },

  app: {
    head: {
      title: "David Glassman",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1.0" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
    },
  },

  vite: {
    plugins: [svgLoader()],
  },

  colorMode: {
    classSuffix: "",
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2024-11-01",
});
