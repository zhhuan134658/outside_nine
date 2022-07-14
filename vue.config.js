const CompressionPlugin = require('compression-webpack-plugin');
const Timestamp = new Date().getTime();
const path = require('path');
const myTheme = path.resolve(__dirname, './src/style/vantChange.less');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 公共路径
  publicPath: './',
  // 打包路径
  outputDir: 'dist',
  // 静态资源路径
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false, // 不需要生产环境的 source map 设置false（减小dist文件大小，加速构建）
  chainWebpack: chainWebpack,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${myTheme}";`,
        },
      },
    },
  },
  devServer: {
    proxy: {
      //代理跨域
      '/': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        // logLevel: 'debug',
      },
    },
  },
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】  //解决浏览器缓存

      filename: `./static/[name].${Timestamp}.js`,
      chunkFilename: `./static/[name].${Timestamp}.js`,
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip', // 使用gzip压缩
        test: /\.js$|\.html$|\.css$/, // 匹配文件名
        filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
        minRatio: 1, // 压缩率小于1才会压缩
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      }),
    ],
  },
};
// 获取打包时间
function chainWebpack(config) {
  config.plugin('html').tap(args => {
    const date = new Date();
    args[0].createDate = formatDateTime(date);
    return args;
  });
}
// 中国标准时间 转换成 年月日
function formatDateTime(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? '0' + d : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
  //   return y + '-' + m + '-' + d;
}
