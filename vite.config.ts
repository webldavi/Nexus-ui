import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//setting plugin configuration
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Nexus",
      fileName: (format) => `Nexus.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
  plugins: [vue()],
});
