import express from "express"
import dotenv from 'dotenv'

import cors from "cors"

import product from './product/routes/index.js'

import connectToMongo from "./config/db.js" 


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.bodyParser());
app.use(express.urlencoded({ extended: true }));

connectToMongo();

app.use("/api/product",product)


app.listen(PORT, () => {
  console.log(`Server Running... ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to ZaPP nft store");
});

