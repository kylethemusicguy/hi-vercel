const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  const target = "https://www.google.com"; // You can change this URL to any website you want to proxy
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api/": "/", // This allows you to call /api/ in the frontend to go to the target URL
    },
  })(req, res);
};
