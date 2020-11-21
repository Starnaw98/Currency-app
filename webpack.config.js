const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",  
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist")
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: "/html$/",
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
};