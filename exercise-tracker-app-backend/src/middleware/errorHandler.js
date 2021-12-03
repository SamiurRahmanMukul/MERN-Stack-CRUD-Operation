// external modules imports
// const createError = require("http-errors");

// 404 not found error handler
const notFoundErrorHandler = (req, res, next) => {
  // next(createError(404, "Your requested url was not found!"));
  res.status(404).json({ error: "Your requested url was not found!" });
};

// default error handler
const errorHandler = (err, req, res, next) => {
  if (req.headerSent) {
    next("There was an error in the request!");
  } else {
    if (err.message) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ err });
    }
  }
};

// exports the error handlers
module.exports = {
  notFoundErrorHandler,
  errorHandler,
};
