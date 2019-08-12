const merge = require('webpack-merge')
const BaseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(BaseWebpackConfig, {
  mode: 'production',
  plugins: [

  ]
})

module.exports = new Promise((res, rej) => {
  res(buildWebpackConfig)
})