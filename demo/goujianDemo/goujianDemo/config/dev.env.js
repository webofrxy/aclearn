var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  //此处多了一下的代码
  // API_ROOT: '"wqeqwe"'
})
