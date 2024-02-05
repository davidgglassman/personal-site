import svgLoader from "vite-svg-loader";
import ViteYaml from "@modyfi/vite-plugin-yaml";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@pinia/nuxt", "@vueuse/nuxt"],
  app: {
    head: {
      title: "David Glassman",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    },
  },
  vite: {
    plugins: [svgLoader(), ViteYaml()],
  },
});
