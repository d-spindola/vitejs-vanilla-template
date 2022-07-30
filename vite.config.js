import alias from "@rollup/plugin-alias";
import path from "path";

/** @type {import('vite').UserConfig} */
export default {
  root: "./src",
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "./src/scripts"),
    },
  },
};
