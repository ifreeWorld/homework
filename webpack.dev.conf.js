const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base.conf.js')

const webpackConfig = merge(base, {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  // sourcemap
  devtool: 'cheap-module-eval-source-map',
  // 模块热替换
  devServer: {
    contentBase: '/',
    publicPath: '/',
    host: 'localhost',
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: '//localhost:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  resolve: {
    // 别名
    alias: {}
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        NODE_ENV: 'development',
        BASE_URL: '//localhost:9000/api/market'
      })
    })
  ]
})

module.exports = webpackConfig
