const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const User = mongoose.model("User", UserSchema);

module.exports = User;
