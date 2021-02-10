const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://eacodingtest.digital.energyaustralia.com.au',
      changeOrigin: true,
    })
  );
};
