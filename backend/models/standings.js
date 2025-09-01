const mongoose=require("mongoose");

const StandingSchema = new mongoose.Schema({
  year: {
    type: String, // you can also use Number
    required: true,
    unique: true
  },
  stand1: {
    country: { type: String, required: true },
    gold: { type: Number, required: true },
    silver: { type: Number, required: true },
    bronze: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  stand2: {
    country: { type: String, required: true },
    gold: { type: Number, required: true },
    silver: { type: Number, required: true },
    bronze: { type: Number, required: true },
    total: { type: Number, required: true }
  },
  stand3: {
    country: { type: String, required: true },
    gold: { type: Number, required: true },
    silver: { type: Number, required: true },
    bronze: { type: Number, required: true },
    total: { type: Number, required: true }
  }
});

module.exports = mongoose.model("standings", StandingSchema);
