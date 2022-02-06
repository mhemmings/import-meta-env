const vueJsxPlugin = require("@vitejs/plugin-vue-jsx");
const vuePlugin = require("@vitejs/plugin-vue");
const dotenvPlugin = require("vite-plugin-dotenv").default;

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    dotenvPlugin({ verify: false }),
    vueJsxPlugin({
      include: [/\.[jt]sx$/],
    }),
    vuePlugin(),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
};