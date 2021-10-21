// external imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const favicon = require("serve-favicon");

// internal imports
const user = require("./src/routes/user");
const exercise = require("./src/routes/exercise");

const app = express();
dotenv.config({ path: ".env" });

// mongoDB database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database connection established successful!"))
  .catch((err) => console.log("Database connection error: " + err));

// request parser
app.use(cors());
app.use(express.json());

// set static folder & favicon
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// routing setup
app.get("/", (req, res) => res.send("Hello world! Exercise Tracker App !!!"));
app.use("/users", user);
app.use("/exercise", exercise);

// application listening on 5000 port...
const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log("Listening error: " + err);
  } else {
    console.log(`Exercise Tracker App Listening At http://localhost:${port}`);
  }
});
