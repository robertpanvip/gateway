import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    title: 'Pan Open Source',
    favicon:'./public/logo.svg'
  },
  plugins: [pluginReact()],
});
