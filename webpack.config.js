const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'index': './src/main.ts'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  resolve: {
    root: helpers.root('src'),
    extensions: ['', '.ts', '.js', '.less'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular')]
      }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript', exclude: [/\.(spec|e2e)\.ts$/] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap') },
      { test: /\.html$/, loader: 'raw', exclude: [helpers.root('src/index.html')] },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(ttf|eot|svg|woff2?)(.*)?$/, loader: 'file' }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/logo.png'
    })
  ],

  devServer: {
    historyApiFallback: true
  },

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
