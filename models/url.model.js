const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  urlPath: String,
  originalUrl: String,
  shortUrl: String,
  Hits: {
    type:Number,
    default:0},
  usersVisited: {
    type:Array,
    default:[]
  },
  lastAccessedOn: Date,
});
module.exports = mongoose.model("Url", urlSchema);
