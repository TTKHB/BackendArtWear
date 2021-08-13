const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ten: {
    type: String,
  },
  gia: {
    type: String,
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
    default: [{ mau: "", image: "" }],
  },
  tieude: {
    type: String,
    default: 0,
  },
  ngaytao: {
    type: Date,
    default: Date.now,
  },
  danhgia: {
    //tam thoi de string
    type: String,
    default: "",
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
