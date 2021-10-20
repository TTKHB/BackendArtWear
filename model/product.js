const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ten: {
    type: String,
  },
  gia: {
    type: Number,
    default: "",
  },
  kichthuoc: {
    type: Array,
    default: [{ size: "test" }],
  },

  mota: {
    type: String,
    default: "",
  },
  product: {
    type: Array,
    default: [{ mau: "", image: [] }],
  },
  ngaytao: {
    type: Date,
    default: Date.now,
  },
  ThumbImg: {
    type: String,
    default: "",
  },
  soluong: {
    type: Number,
    default: 0,
  },
  viewer: {
    type: Number,
    default: 0,
  },
  categories_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

productSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Product", productSchema);
