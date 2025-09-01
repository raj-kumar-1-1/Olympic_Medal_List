const mongoose = require("mongoose");
const medalSchema = new mongoose.Schema({
  count: { type: Number, required: true },
}, { _id: false });

const yearlyDataSchema = new mongoose.Schema({
  gold: medalSchema,
  silver: medalSchema,
  bronze: medalSchema
}, { _id: false });

const historySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  flag:{type:String,required:true},
  description:{type:String,required:true},
  olympics: {
    type: Map,
    of: yearlyDataSchema 
  }
});
module.exports = mongoose.model("history", historySchema);