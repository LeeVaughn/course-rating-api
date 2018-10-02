const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User"
  },
  postedOn: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  review: String
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;