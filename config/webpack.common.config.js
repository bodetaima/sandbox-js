'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./helpers');

const isDevelopment = process.env.NODE_ENV === 'development';

const commonWebpackConfig = {
  entry: {
    polyfill: '@babel/polyfill',
    index: helpers.root('src', 'js', 'index'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': helpers.root('src'),
    },
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include: [helpers.root('src')] },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: isDevelopment } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
      {
        test: /\.(ico|jpg|jpeg|png|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {
            limit: 10 * 1024,
            name: 'static/[name].[hash:8].[ext]',
            fallback: 'file-loader',
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
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
      favicon: './favicon.ico',
      template: './src/index.html',
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
