import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    historyApiFallback: true, // Fixes deep linking issues
    host: true,
  },
});
