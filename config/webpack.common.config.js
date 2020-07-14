"use strict";

const HtmlPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");

const isDevelopment = process.env.NODE_ENV === "development";

const commonWebpackConfig = {
    entry: {
        polyfill: "@babel/polyfill",
        index: helpers.root("src", "js", "index"),
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
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
                        },
                    },
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCSSExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDevelopment,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: require("fibers"),
                                indentedSyntax: false,
                            },
                        },
                    },
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
