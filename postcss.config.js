module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    autoprefixer: {
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009'
    },
    'postcss-pxtorem': {
      rootValue: 32, // 根字体大小
      unitPrecision: 5, // 精度
      propList: ['*'], // 可以将px转换成rem的属性
      selectorBlackList: [], // 选择器忽略并保留px
      replace: true, // 替换包含rems的规则
      mediaQuery: true, // 是否允许在媒体查询中转换px
      minPixelValue: 2 // 设置要替换的最小像素值
    }
  }
}
