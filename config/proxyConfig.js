module.exports = {
    proxyList: {
        
    '/': {
    // 测试环境
    target: 'https://futurenext.com.cn', // 接口域名
    changeOrigin: true, //是否跨域
    pathRewrite: {
    '/': '' //需要rewrite重写的,
    }
    }
    }
    }