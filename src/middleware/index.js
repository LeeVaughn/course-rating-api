const User = require("../models/user");
const auth = require("basic-auth");

function authenticateUser(req, res, next) {
  const credentials = auth(req);

  if (credentials) {
    // credentials lists the key as name but it actually reflects the user's email address
    User.authenticate(credentials.name, credentials.pass, (error, user) => {
      if (error) {
        const err = new Error("Unable to authenticate credentials");
        err.status = 401;
        next(err);
      }
      req.user = user;
      next();
    });
  } else {
    const err = new Error("Please enter your credentials");
    err.status = 401;
    next(err);
  }
}

module.exports.authenticateUser = authenticateUser;
