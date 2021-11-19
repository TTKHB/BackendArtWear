const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  note: {
    type: String,
    default: "",
  },
  Payment: {
    type: String,
    default: "",
  },
  dateOrdered: {
    type: Date,
    default: Date.now(),
  },
  orderitems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItems",
      required: true,
      default: "",
    },
  ],
  country: {
    type: String,
    default: "VN",
  },
  city: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: 0,
  },
  phone: {
    type: String,
    default: "",
  },
  totalPrice: {
    type: Number,
    default: "",
  },
  totalFinalPrice: {
    type: Number,
    default: "",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
