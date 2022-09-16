import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import mockAPI from "./vite-plugin-mock-api";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env["CLIENT_ID"] = env.CLIENT_ID;
  process.env["CLIENT_SECRET"] = env.CLIENT_SECRET;
  process.env["REDIRECT_URI"] = env.REDIRECT_URI;
  return {
    define: {
      "process.env": {
        CLIENT_ID: env.CLIENT_ID,
        CLIENT_SECRET: env.CLIENT_SECRET,
        REDIRECT_URI: env.REDIRECT_URI,
      },
    },
    plugins: [vue(), vuetify({ autoImport: true }), mockAPI()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
    },
  };
});
