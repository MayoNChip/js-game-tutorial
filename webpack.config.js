const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/app.ts",
  output: {
    path: __dirname + "/dist/js", // or path: path.join(__dirname, "dist/js"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.mp3$/,
        exclude: /node_modules/,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
