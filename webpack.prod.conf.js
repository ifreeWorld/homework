const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base = require('./webpack.base.conf.js')

const webpackConfig = merge(base, {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  devtool: 'source-map',
  optimization: {
    nodeEnv: 'production',
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, './'),
      verbose: true,
      dry: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: 'vendor.[hash].css' // 和webpack.base.conf.js中的vendor名字一致
    })
  ]
})

module.exports = webpackConfig
