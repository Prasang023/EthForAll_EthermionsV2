import mongoose from "mongoose";
const Mongo_URI =
  "mongodb+srv://zaidm124:zaidm124@cluster0.zv4dudh.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(Mongo_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("> Connected..."))
    .catch((err) =>
      console.log(`> Error while connecting to mongoDB : ${err.message}`)
    );
};

export default connectToMongo;
