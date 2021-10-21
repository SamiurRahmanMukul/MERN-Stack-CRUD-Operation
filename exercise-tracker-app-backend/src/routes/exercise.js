// external imports
const express = require("express");

// controller imports
const { getAllExercise, addExercise, getAExercise, updateAExercise, deleteAExercise } = require("./../controllers/exercise.controller");

// express router object
const router = express.Router();

// get all exercise route
router.route("/").get(getAllExercise);

// add a new exercise route
router.route("/add").post(addExercise);

// get a exercise route
router.route("/:id").get(getAExercise);

// update a exercise route
router.route("/update/:id").post(updateAExercise);

// delete a exercise route
router.route("/:id").delete(deleteAExercise);

module.exports = router;
