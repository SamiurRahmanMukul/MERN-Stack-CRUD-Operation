// external modules imports
const express = require("express");

// internal modules imports
const { createUser, getAllUser, getUserById, updateUser, deleteUser } = require("./../controllers/user.controller");

// express router object
const router = express.Router();

// make a route to get all users
router.get("/", getAllUser);

// make a route to create a user
router.post("/", createUser);

// make a route to get a user by id
router.get("/:id", getUserById);

// make a route to update and delete users by id
router.route("/:id").put(updateUser).delete(deleteUser);

// export the router
module.exports = router;
