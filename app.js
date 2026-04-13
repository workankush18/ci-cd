const express = require("express");

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("🚀 CI/CD Pipeline is working on Vercel!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is healthy",
  });
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "Ankush",
    role: "Developer",
  });
});

// export instead of listen
module.exports = app;