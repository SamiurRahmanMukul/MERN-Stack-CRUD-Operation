// external modules imports
const express = require("express");

// express router object
const router = express.Router();

// import exercise controller
const { addNewExercise, getAllExercise, getSingleExercise, updateExercise, deleteExercise } = require("./../controllers/exercise.controller");

// make a route to create a new exercise
router.post("/", addNewExercise);

// make a route to get all exercises
router.get("/", getAllExercise);

// make a route to get a single exercise by id
router.get("/:id", getSingleExercise);

// make a route to update a single exercise by id
router.put("/:id", updateExercise);

// make a route to delete a single exercise by id
router.delete("/:id", deleteExercise);

// export the router object
module.exports = router;
