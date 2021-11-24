const mongoose = require("mongoose");

const Notification_EventSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  banner: {
    type: String,
    default: "",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hot",
    required: true,
  },
  NotifyType_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NotifyType",
    required: true,
  },
  hot_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hot",
    required: true,
  },
});

Notification_EventSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

Notification_EventSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Notification_Event", Notification_EventSchema);
