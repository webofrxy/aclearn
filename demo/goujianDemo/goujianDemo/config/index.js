// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    //本地开发环境请求的路径：config文件下的dev.env.js文件
    env: require('./dev.env'),
    //下面改为了8086
    port: 8080,
    //自动开启浏览器
    autoOpenBrowser: true,
    //静态资源的存放目录为static目录下
    assetsSubDirectory: 'static',
    //静态资源的公共路径
    assetsPublicPath: '/',
    //api请求路径的代理列表配置，这个参数主要是一个地址映射表，你可以通过设置将复杂的url简化，例如我们要请求的地址是api.xxxxxxxx.com/list/1
    proxyTable: {
        '/dev.api.php':{
            //目标路径
            target:'http://dev.anchumall.cc:9550/api.php',   // 本地 测试
            changeOrigin:true,
            //路径重写
            pathRewrite:{
                '^/dev.api.php':''
            }
        },
        '/pro.api.php':{                                    // 线上
            target:'https://b2b.hzanchu.com/api.php',
            changeOrigin:true,
            pathRewrite:{
                '^/pro.api.php':''
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
