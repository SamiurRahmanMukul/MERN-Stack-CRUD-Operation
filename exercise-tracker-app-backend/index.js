// external imports
const express = require("express");
const env = require("dotenv");

// project variables
const port = process.env.PORT || 5000;

const app = express();
env.config();

// application routes
app.get("/", (req, res) => {
  res.send("Hello world!");
  res.end();
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log(`Exercise Tracker App Run At http://localhost:${port}`);
  }
});
