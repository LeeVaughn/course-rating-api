"use strict";

const express = require("express");
const router = express.Router();
const mid = require("../middleware");
const User = require("../models/user");
const Review = require("../models/review");
const Course = require("../models/Course");

// GET /api/users
// returns the currently authenticated user
router.get("/users", mid.authenticateUser, (req, res, next) => {
  res.json(req.user);
});

// POST /api/users
// creates a new user
router.post("/users", (req, res, next) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      next(err);
    }
    res.status(201);
    res.location("/");
    res.send();
  });
});

// GET /api/courses
// returns courseId and title properties
router.get("/courses", (req, res, next) => {
  Course.find({}, "_id title", (err, courses) => {
    if (err) {
      next(err);
    }
    res.json(courses);
  });
});

// POST /api/courses
// creates a new course
router.post("/courses", mid.authenticateUser, (req, res, next) => {
  const course = new Course(req.body);

  course.save((err, course) => {
    if (err) {
      next(err);
    }
    res.status(201);
    res.location("/");
    res.send();
  });
});

// GET /api/courses/:courseId
// returns all course properties and related documents for specified course id
router.get("/courses/:id", (req, res, next) => {
  Course.findById(req.params.id)
   .populate("user")
    .populate("reviews")
    .exec((err, courses) => {
      res.json(courses);
    });
});

// PUT /api/courses/:courseId
// updates the specified course id
router.put("/courses/:id", mid.authenticateUser, (req, res, next) => {
  Course.findById(req.params.id)
    .exec((err, course) => {
      if (!course) {
        const err = new Error("Course not found");
        err.status = 400;
        next(err);
      } else {
        course.update(req.body, (err, result) => {
          if (err) {
            next(err);
          }
          res.status(204);
          res.json(result);
        });
      }
    });
});

// POST /api/courses/:courseId/reviews
// creates a new review for specificed course id
router.post("/courses/:id/reviews", mid.authenticateUser, (req, res, next) => {
  const review = new Review(req.body);

  review.save((err, review) => {
    if (err) {
      next(err);
    }
    res.status(201);
    res.location("/courses/" + req.params.id);
    res.send();
  });
});

module.exports = router;
