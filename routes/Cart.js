const Cart = require("../model/Cart");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/**
 * Lấy tất cả Cart
 */
router.get("/", async (req, res) => {
  const cartList = await Cart.find();

  if (!cartList) {
    res.status(500).json({
      success: false,
    });
  }
  res.status(200).send(cartList);
});

/**
 *Them cart
 */
router.post("/", async (req, res) => {
  let cart = new Cart({
    amount: req.body.amount,
    product_id: req.body.product_id,
    user_id: req.body.user_id,
  });
  cart = await cart.save();

  if (!cart) return res.status(400).send("the cart cannot be created!");
  res.send(cart);
});

/**
 * Xóa Cart bằng id
 *@param {id}
 */
router.delete("/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id)
    .then((cart) => {
      if (cart) {
        return res.status(200).json({
          success: true,
          message: "the cart is deleted!",
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "cart not found!" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

/**
 * cập nhật Cart
 * @param {id}
 */
router.put(`/:id`, async (req, res) => {
  const { amount } = req.body;

  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send("Invalid Cart Id");
  }

  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      amount,
    },
    { new: true }
  );

  if (!updatedCart) {
    return res.status(500).send("the product cannot be updated!");
  }

  res.send(updatedCart);
});
module.exports = router;
