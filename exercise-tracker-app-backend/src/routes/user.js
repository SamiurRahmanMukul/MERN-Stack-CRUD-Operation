// external imports
const express = require("express");

// controller imports
const { addUser, getUser } = require("./../controllers/user.controller");

// express router object
const router = express.Router();

// get all user route
router.route("/").get(getUser);

// add a user route
router.route("/add").post(addUser);

module.exports = router;
