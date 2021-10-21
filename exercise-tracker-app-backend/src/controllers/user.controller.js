// user model import
const User = require("./../models/user.model");

// get all user function
async function getUser(req, res) {
  await User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("User GET error: " + err));
}

// adding a new user function
async function addUser(req, res) {
  const userName = req.body.username;

  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json("New User added successfully!"))
    .catch((err) => res.status(400).json("New User add error: " + err));
}

module.exports = { getUser, addUser };
