module.exports = {
  devServer: {
      port: 3000,
      proxy: {
          //名字可以自定义，这里我用的是api
          '/api': {
            target: 'http://123.207.109.101:3000',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//这里设置是否跨域
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
      }
  }
};