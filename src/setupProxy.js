import axios from 'axios';
const { createProxyMiddleware } = require('http-proxy-middleware');

axios.defaults.withCredentials = true;

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // '/api'로 시작하는 경로를 타겟 URL에서 제거합니다.
            }
        })
    );
};
