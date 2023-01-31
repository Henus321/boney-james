/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "/",
  },
  performance: {
    hints: false,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(s?)css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: "bundle-loader",
          options: {
            name: "[name]",
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        exclude: /fonts/,
        loader: "file-loader",
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      title: "Boney James",
      favicon: "./public/favicon.ico",
    }),
    new WebpackManifestPlugin(),
    new NodePolyfillPlugin(),
  ],
};
