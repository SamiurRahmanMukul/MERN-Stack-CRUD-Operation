// exercise model import
const Exercise = require("./../models/exercise.model");

// get all exercise function
async function getAllExercise(req, res) {
  await Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Exercise GET error: " + err));
}

// add a new exercise
async function addExercise(req, res) {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("New Exercise added successfully!"))
    .catch((err) => res.status(400).json("New Exercise add error: " + err));
}

// get a exerciser by id
async function getAExercise(req, res) {
  await Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Get a Exercise error: " + err));
}

// update a exerciser by id
async function updateAExercise(req, res) {
  await Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Update a (2) Exercise error: " + err));
    })
    .catch((err) => res.status(400).json("Update a (1) Exercise error: " + err));
}

// delete a exerciser by id
async function deleteAExercise(req, res) {
  await Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted!"))
    .catch((err) => res.status(400).json("Delete a Exercise error: " + err));
}

module.exports = {
  getAllExercise,
  addExercise,
  getAExercise,
  updateAExercise,
  deleteAExercise,
};
