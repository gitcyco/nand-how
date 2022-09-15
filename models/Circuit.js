const mongoose = require("mongoose");

const CircuitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  canvas: {
    type: [String],
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Circuit", CircuitSchema);
