import { defineConfig, splitVendorChunkPlugin  } from "vite";
import react from "@vitejs/plugin-react";
const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "404.html"),
      },
    },
  },
});
