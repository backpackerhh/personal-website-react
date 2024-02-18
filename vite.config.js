import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    server: {
      open: true,
    },
    build: {
      outDir: "build",
    },
    plugins: [react()],
    test: {
      globals: true,
      setupFiles: "src/setupTests.js",
      environment: "jsdom",
    },
  };
});
