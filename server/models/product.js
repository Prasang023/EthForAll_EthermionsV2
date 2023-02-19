import mongoose from "mongoose";
const { Schema } = mongoose;

const product = new Schema({
  ipfs:{
    type:String,
  },
  uuid:{
    type:Number,
  }
});

const productModel = mongoose.model("product", product);
export default productModel;
