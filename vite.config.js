import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: "APP", //defalt value is VITE
  base: "/Food-App-FrontEnd/",
});
