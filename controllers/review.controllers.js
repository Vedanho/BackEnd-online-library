const e = require("express");
const Review = require("../models/Review.model");

module.exports.reviewControllers = {
  createReview: (req, res) => {
    Review.create({ text: req.body.text, book: req.body.book })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  getReview: (req, res) => {
    Review.find()
      .then((data) => {
        res.json(data);
      })
      .catch(e);
  },
  deleteReview: (req, res) => {
    Review.find().then((data) => {
      res.json(data);
    });
  },
  getReviewByBook: (req, res) => {
    Review.find({ book: req.params.id })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
};
