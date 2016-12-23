const webpack = require('webpack')
const webpackCommonConfig = require('./webpack.common.config.js')
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')

module.exports = Object.assign(webpackCommonConfig, {
  plugins: [
    commonsPlugin,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
})