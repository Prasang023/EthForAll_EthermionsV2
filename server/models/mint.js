const mongoose = require("mongoose");
const { Schema } = mongoose;

const mint = new Schema({
  address: {
    type: String,
  },
  title: {
    type: String,
  },
  description: { type: String },
  image: { type: String },
  uuid: { type: Number },
});

const mintedNFT = mongoose.model("Mint", mint);
module.exports = mintedNFT;
