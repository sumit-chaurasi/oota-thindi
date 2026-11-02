import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
   base: '/oota-thindi/',
  server: {
    port: 5000,
    open: false,
  },
});
