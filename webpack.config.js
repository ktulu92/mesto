const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/pages/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },

   devServer: {
    contentBase: path.join(__dirname, 'dist')},

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-syntax-class-properties",
            ],
          },
        },
      },

      {
        test: /\.(png|jpe?g|gif|jpg|svg|otf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },

  // devtool: "inline-source-map",
  //   mode: 'development'
};
