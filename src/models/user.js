const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
      message  : props => `${props.value} is not a valid email address`
    }
  },
  password: {
    type: String,
    required: true
  }
});

// authenticate input against database documents
UserSchema.statics.authenticate = (email, password, callback) => {
  User.findOne({ emailAddress: email })
    .exec((err, user) => {
      if (err) {
        return callback(err);
      } else if ( !user ) {
        const err = new Error("User not found");
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (result === true) {
          return callback(null, user);
        } else {
          const err = new Error("Authentication failed");
          err.status = 401;
          return callback(err);
        }
      });
    });
}

// hashes password before saving to database
UserSchema.pre("save", function(next) {
  const user = this;

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      next(err);
    }
    // replaces plain text password with hashed password
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
