const mongoose = require("mongoose");

const VouncherSchema = mongoose.Schema({
  code: {
    type: String,
    default: "",
    require: true,
  },
  User_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  gioihan: {
    type: Number,
    default: "",
  },
  sotiengiam: {
    type: Number,
    default: "",
    require: true,
  },
  sudung: {
    type: Boolean,
    default: false,
    require: true,
  },
  dateStart: {
    type: Date,
    default: "",
    require: true,
  },
  dateEnd: {
    type: Date,
    default: "",
    require: true,
  },
});

module.exports = mongoose.model("Vouncher", VouncherSchema);
