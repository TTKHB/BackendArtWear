const Review = require("../model/Review");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/**
 * Lấy tất cả reviews
 */
router.get("/", async (req, res) => {
  const reviews = await Review.find().populate(["reviews_id"]);

  if (!reviews) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(reviews);
});

/**
 * Lấy số lượng người đánh sản phẩm
 *@params {product_id,ratingvalue}
 * ratingvalue là lấy người có đánh giá từ 1->5
 */
router.get("/rating-products", async (req, res) => {
  const { ratingvalue, product_id } = req.query;
  console.log(ratingvalue);
  const reviews = await Review.find({
    RatingValue: ratingvalue,
    product_id: product_id,
  });

  if (!reviews) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(reviews);
});

//đếm số lượng review
router.get(`/countRating/:count`, async (req, res) => {
  console.log("test");
  const countReview = await Review.countDocuments({
    RatingValue: req.params.count,
  });

  if (!countReview) {
    res.status(500).json({
      success: false,
    });
  }
  res.send({
    countReview: countReview,
  });
});

/**
 * Thêm review
 */
router.post(`/`, async (req, res) => {
  const { ratingvalue, review, userid, product_id } = req.body;

  let reviews = new Review({
    RatingValue: ratingvalue,
    Review: review,
    UserId: userid,
    product_id: product_id,
  });

  reviews = await reviews.save();

  if (!reviews) return res.status(500).send("The review cannot be created");

  res.send(reviews);
});

/**
 * cập nhật sản phẩm
 * @param {id}
 */
router.put(`/:id`, async (req, res) => {
  const { ratingValue, review, userId, product_id } = req.body;

  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send("Invalid Review Id");
  }

  const updateReviews = await Review.findByIdAndUpdate(
    req.params.id,
    {
      RatingValue: ratingValue,
      Review: review,
      UserId: userId,
      product_id: product_id,
    },
    { new: true }
  );

  if (!updateReviews) {
    return res.status(500).send("the review cannot be updated!");
  }

  res.send(updateReviews);
});

/**
 * Xóa reviews bằng id
 *@param {id}
 */
router.delete("/:id", (req, res) => {
  Review.findByIdAndRemove(req.params.id)
    .then((reviews) => {
      if (reviews) {
        return res.status(200).json({
          success: true,
          message: "the reviews is deleted!",
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "reviews not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

module.exports = router;
