// external modules imports
const express = require("express");

// exercise controller imports
const { getAllExercise, addExercise, getAExercise, updateAExercise, deleteAExercise } = require("./../controllers/exercise.controller");

// express router object
const router = express.Router();

// create a route to add a new exercise
router.route("/add").post(addExercise);

// create a route to get all exercises
router.route("/").get(getAllExercise);

// create a route to get a single exercise
router.route("/:id").get(getAExercise);

// create a route to update a single exercise
router.route("/:id").put(updateAExercise);

// create a route to delete a single exercise
router.route("/:id").delete(deleteAExercise);

// export the router object
module.exports = router;
