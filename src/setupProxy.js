import axios from 'axios';

const { createProxyMiddleware } = require('http-proxy-middleware');

axios.defaults.withCredentials = true;

module.exports = function(App) {
    App.use(
        '/api',
        createProxyMiddleware({
            target: 'http://143.248.197.66:5000',
            changeOrigin: true,
        })
    );
};
