import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    //css预处理 路径最后要加上;不然会报错
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/common.scss";',
      },
    },
  },
  plugins: [vue()],
  server: {
    // ← ← ← ← ← ←
    host: "0.0.0.0", // ← 新增内容 ←
  },
});
