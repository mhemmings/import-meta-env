const importMetaEnv = require("@import-meta-env/unplugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    importMetaEnv.webpack({
      example: ".env.example",
    }),
  ],
  optimization: {
    // Make output files easier to read.
    minimize: false,
  },
};