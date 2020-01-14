const path = require("path");
// plugin to move html file from src to dist and inject the js file(s)
const htmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "src/css", to: "css" },
      { from: "src/sw.js", to: "sw.js" },
      { from: "src/manifest.json", to: "manifest.json" }
    ])
  ],
  // babel stuff
  module: {
    rules: [
      {
        // testing for javascript files
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
