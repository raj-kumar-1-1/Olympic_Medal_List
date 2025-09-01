
const { text } = require("body-parser");
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerName: { type: String, required: true },
  playerImage: { type: String, required: true },
}, { _id: false });

const medalSchema = new mongoose.Schema({
  count: { type: Number, required: true },
  sports: [
    {
      sportName: { type: String, required: true },
      player: playerSchema
    }
  ]
}, { _id: false });

const yearlyDataSchema = new mongoose.Schema({
  gold: medalSchema,
  silver: medalSchema,
  bronze: medalSchema
}, { _id: false });

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  flag: { type: String, required: true }, 
  description: {type:String},
  olympics: {
    type: Map,
    of: yearlyDataSchema 
  }
});

module.exports = mongoose.model("Country", countrySchema);