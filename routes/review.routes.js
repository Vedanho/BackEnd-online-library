const { Router } = require("express");

const { reviewControllers } = require("../controllers/review.controllers");

const router = Router();

router.post('/user/review', reviewControllers.createReview)
router.get('/user/review', reviewControllers.getReview)
router.get('/user/review/book/:id', reviewControllers.getReviewByBook)
router.delete('/user/review', reviewControllers.deleteReview)

module.exports = router