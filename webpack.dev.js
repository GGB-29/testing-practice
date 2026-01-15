const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
    mode: "development", 
    devtool: "eval-source-map", 
    devServer: {
        watchFiles: ["./src/home.html"], 
    },
    plugins: [
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'], 
            fix: true,
            context: 'src', 
        }), 
    ], 
});