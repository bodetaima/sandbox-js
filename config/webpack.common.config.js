"use strict";

const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");

const isDevelopment = process.env.NODE_ENV === "development";

const commonWebpackConfig = {
    entry: {
        polyfill: "@babel/polyfill",
        main: helpers.root("src", "js", "index"),
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@": helpers.root("src"),
        },
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader", include: [helpers.root("src")] },
            {
                test: /\.css$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCSSExtractPlugin.loader,
                    { loader: "css-loader", options: { sourceMap: isDevelopment } },
                    "postcss-loader",
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: require("fibers"),
                                indentedSyntax: true, // optional
                            },
                        },
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlPlugin({
            favicon: "./favicon.ico",
            template: "./src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
        }),
    ],
};

module.exports = commonWebpackConfig;
