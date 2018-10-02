"use strict";

const express = require("express");
const router = express.Router();

// GET /api/users
router.get("/users", function(req, res) {
  res.json({ response: "You sent me a GET request" });
});

// POST /api/users
router.post("/users", function(req, res) {
  res.json({ response: "You sent me a POST request", body: req.body });
});

// GET /api/courses
router.get("/courses", function(req, res) {
  res.json({ response: "You sent me a GET request" });
});

// POST /api/courses
router.post("/courses", function(req, res) {
  res.json({ response: "You sent me a POST request", body: req.body });
});

// GET /api/courses/:courseId
router.get("/courses/:id", function(req, res) {
  res.json({ response: "You sent me a GET request for ID " + req.params.id });
});

// PUT /api/courses/:courseId
router.put("/courses/:id", function(req, res) {
  res.json({ response: "You sent me a PUT request for ID " + req.params.id });
});

// POST /api/courses/:courseId
router.post("/courses/:id/reviews", function(req, res) {
  res.json({ response: "You sent me a POST request for ID " + req.params.id });
});

module.exports = router;