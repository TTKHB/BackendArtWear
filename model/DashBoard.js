const mongoose = require("mongoose");

const DashBoardSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
  Styles: {
    type: Array,
    default: [],
  },
  theloai_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
module.exports = mongoose.model("DashBoard", DashBoardSchema);
