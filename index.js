const express = require("express");
const app = express();

// Middleware and routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Vercel!" });
});

// Export as a Vercel serverless function
module.exports = (req, res) => {
  // This handles the Vercel lambda invocation
  app(req, res);
};
