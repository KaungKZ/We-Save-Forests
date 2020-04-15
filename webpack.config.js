const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const terserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: ["./src/js/index.js", "./src/css/style.scss"],
    donate: ["./src/js/donate.js", "./src/css/donate.scss"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(img|png|svg|jpeg|gif)$/,

        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "main",
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/images/logo.png",
      excludeChunks: ["donate"],
      minify: {
        removeComments: true,
      },
    }),
    new HTMLWebpackPlugin({
      title: "donate",
      template: "./src/donate.html",
      filename: "./donate.html",
      favicon: "./src/images/logo.png",
      excludeChunks: ["main"],
      minify: {
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new terserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  devServer: {
    staticOptions: {
      headers: {
        "Cache-Control": "max-age=2628000",
      },
    },
  },
};
