// external modules imports
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

// create a User model
const User = mongoose.model("User", userSchema);

// export the User model
module.exports = User;
