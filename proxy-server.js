const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Configure the proxy middleware
const apiProxy = createProxyMiddleware("/api", {
  target: "http://examination.24x7retail.com",
  changeOrigin: true,
  headers: {
    "Content-Type": "application/json",
    apiToken: "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
  },
  logger: console,
});

// Proxy API requests
app.use("/api", apiProxy);

// Start the server
app.listen(3001, () => {
  console.log("Proxy server is running on http://localhost:3001");
});
