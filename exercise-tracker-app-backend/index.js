/*Title: Exercise Tracker App - app.js
  Description: Builds a RESTful API for the exercise tracker app.
  Author: Md. Samiur Rahman (Mukul) 
  Website: http://www.SamiurRahmanMukul.epizy.com
  Github: https://www.github.com/SamiurRahmanMukul
  Email: example2022@gmail.com [FAKE EMAIL]
  Date: 20/11/2021 */

// external modules imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const favicon = require("serve-favicon");

// internal modules imports
const userRoute = require("./src/routes/user");
const exercise = require("./src/routes/exercise");
const { notFoundErrorHandler, errorHandler } = require("./src/middleware/errorHandler");

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

// application routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/exercises", exercise);

// 404 not found error handler
app.use(notFoundErrorHandler);

// default error handler
app.use(errorHandler);

// application start
app.listen(port, (err) => {
  if (err) {
    console.log("Listening error: " + err);
  } else {
    console.log(`Exercise Tracker App Running On http://localhost:${port}`);
  }
});
