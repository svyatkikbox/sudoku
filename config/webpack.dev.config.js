const webpack = require('webpack')
const merge = require('webpack-merge')
const BaseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(BaseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8081,
    overlay: true,
    contentBase: BaseWebpackConfig.externals.paths.dist
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[filename].map'
    })
  ]
})

module.exports = new Promise((res, rej) => {
  res(devWebpackConfig)
})
