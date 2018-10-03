const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  estimatedTime: {
    type: String
  },
  materialsNeede: {
    type: String
  },
  steps: [{
      stepNumber: Number,
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
  }],
  reviews: [{
    type: Schema.ObjectId,
    ref: "Review"
  }]
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
