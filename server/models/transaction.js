const mongoose = require("mongoose");
const { Schema } = mongoose;

const transaction = new Schema({
  from_email: {
    tpye: String,
  },
  from_address: {
    tpye: String,
  },
  to_email: {
    tpye: String,
  },
  to_address: {
    tpye: String,
  },
  link: {
    tpye: String,
  },
});

const transactionModel = mongoose.model("transaction", transaction);
module.exports = transactionModel;
