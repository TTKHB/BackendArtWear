const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  hot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hot",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  comment: {
    type: String,
    default: "",
    required: String,
  },
});

CommentSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

CommentSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Comment", CommentSchema);
