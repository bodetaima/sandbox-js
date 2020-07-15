"use strict";

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");
const commonConfig = require("./webpack.common.config");
const environment = require("./env/dev.env");

const devWebpackConfig = merge(commonConfig, {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    output: {
        path: helpers.root("dist"),
        publicPath: "/",
        filename: "js/[name].bundle.js",
        chunkFilename: "js/[id].chunk.js",
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new MiniCSSExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 3000,
        stats: {
            normal: true,
        },
    },
});

module.exports = devWebpackConfig;
