// user model import
const User = require("./../models/user.model");

// make a controller to create a new user
async function createUser(req, res) {
  try {
    // create a new user
    const user = new User(req.body);

    // save the user
    await user
      .save()
      .then(() => res.json("User created successfully!"))
      .catch((err) => res.status(400).json("User create error: " + err));
  } catch (error) {
    res.status(400).send(error);
  }
}

// make a controller to get all users
async function getAllUser(req, res) {
  try {
    // get all users
    await User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json("User get error: " + err));
  } catch (error) {
    res.status(400).send(error);
  }
}

// make a controller to get a user by id
async function getUserById(req, res) {
  try {
    // get a user by id
    await User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("User get error: " + err));
  } catch (error) {
    res.status(400).send(error);
  }
}

// make a controller to update a user by id
async function updateUser(req, res) {
  try {
    // update a user by id
    await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("User update error: " + err));
  } catch (error) {
    res.status(400).send(error);
  }
}

// make a controller to delete a user by id
async function deleteUser(req, res) {
  try {
    // delete a user by id
    await User.findByIdAndDelete(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("User delete error: " + err));
  } catch (error) {
    res.status(400).send(error);
  }
}

// export all the controllers
module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
