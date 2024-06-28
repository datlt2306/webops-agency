// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        AboutUs: resolve(__dirname, "AboutUs.html"),
        Contact: resolve(__dirname, "Contact.html"),
        Services: resolve(__dirname, "Services.html"),
        News: resolve(__dirname, "News.html"),
        Pricing: resolve(__dirname, "Pricing.html"),
        Project: resolve(__dirname, "Project.html"),
      },
    },
  },
});
