const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  body: {
    type: Array,
    default: "",
  },

  date: {
    type: Date,
    default: Date.now(),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
module.exports = mongoose.model("Notification", NotificationSchema);
