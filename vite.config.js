import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Brooklyn-Homes/",
  server: {
    historyApiFallback: true, // Fixes deep linking issues
  },
});
