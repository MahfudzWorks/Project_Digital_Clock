import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Project_Digital_Clock/",
  plugins: [tailwindcss(), react()],
});
