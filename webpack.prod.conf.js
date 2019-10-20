const path = require('path')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base = require('./webpack.base.conf.js')

const webpackConfig = merge(base, {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  // devtool: 'source-map',
  optimization: {
    nodeEnv: 'production',
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: 'vendor.[hash].css' // 和webpack.base.conf.js中的vendor名字一致
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  }
})

module.exports = webpackConfig
