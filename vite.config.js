import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFile, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

function directPageRoutes() {
  let outputDirectory;
  return {
    name: "direct-page-routes",
    apply: "build",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      for (const route of ["about", "services", "gallery", "contact"]) {
        const directory = join(outputDirectory, route);
        await mkdir(directory, { recursive: true });
        await copyFile(
          join(outputDirectory, "index.html"),
          join(directory, "index.html"),
        );
      }
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/masjid_islamic_center/" : "/",
  plugins: [react(), tailwindcss(), directPageRoutes()],
}));
