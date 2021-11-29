// external modules imports
const express = require("express");

// user controller imports
const { addUser, getUser } = require("./../controllers/user.controller");

// express router object
const router = express.Router();

// make a route to add a user
router.post("/add", addUser);

// make a route to get all users
router.get("/get", getUser);

// export the router object
module.exports = router;
