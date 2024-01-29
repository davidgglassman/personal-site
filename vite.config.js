import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";
import ViteYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
  plugins: [vue(), svgLoader(), ViteYaml()],
  base: "",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: false,
  },
  server: {
    port: 8090,
  },
});
