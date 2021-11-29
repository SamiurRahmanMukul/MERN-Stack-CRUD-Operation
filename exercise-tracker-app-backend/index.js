// external modules imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const favicon = require("serve-favicon");

// internal modules imports
const user = require("./src/routes/user");
const exercise = require("./src/routes/exercise");

// application configuration
const app = express();
dotenv.config({ path: ".env" });

// environment variables
const port = process.env.PORT || 5000;

// mongoDB database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database connection established successful!"))
  .catch((err) => console.log("Database connection error: " + err));

// application middleware
app.use(cors());
app.use(express.json());

// set static folder & favicon
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// routing setup
app.get("/", (req, res) => res.send("Hello world! Exercise Tracker App !!!"));
app.use("api/v1/users", user);
app.use("api/v1/exercise", exercise);

// application start
app.listen(port, (err) => {
  if (err) {
    console.log("Listening error: " + err);
  } else {
    console.log(`Exercise Tracker App Running On http://localhost:${port}`);
  }
});
