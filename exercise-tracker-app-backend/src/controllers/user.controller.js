// user model import
const User = require("./../models/user.model");

// make a controller to add a new user
async function addNewUser(req, res) {
  const userName = req.body.username;
  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json("New User added successfully!"))
    .catch((err) => res.status(400).json("New User add error: " + err));
}

// make a controller to get all users
async function getAllUser(req, res) {
  await User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("User GET error: " + err));
}

// user controllers export
module.exports = { getAllUser, addNewUser };
