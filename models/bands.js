const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bandsSchema = new Schema({
  bands: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, required: true },
  county: { type: String, required: true }
});

const Bands = mongoose.model("Bands", bandsSchema);

module.exports = Bands;
