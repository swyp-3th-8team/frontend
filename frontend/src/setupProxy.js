// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://localhost:9090',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // URL ^/api -> 공백 변경
            }
        })
    );
};