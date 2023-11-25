// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // Ось де ви встановлюєте псевдонім "@" для директорії "/src"
    },
  },
});
