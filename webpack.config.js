const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

    //  devServer: {
    //   contentBase: path.join(__dirname, 'public')},

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
      { test: /\.css$/i, 
        use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },

  devtool: "inline-source-map",
  //   mode: 'development'
};
