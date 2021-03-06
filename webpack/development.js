import webpack from 'webpack'

import webpackConfig from './config'

export default {

  ...webpackConfig,

  devtool: 'eval',

  entry: [
    ...webpackConfig.entry,
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass']
    }, ...webpackConfig.loaders]
  },

  plugins: [
    ...webpackConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
