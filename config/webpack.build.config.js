const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BaseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(BaseWebpackConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
})

module.exports = new Promise((res, rej) => {
  res(buildWebpackConfig)
})