import express from "express";
const app = express();
// const articles = require("./routes/articles");
import { router as articles } from "./routes/articles";
import { connectDB } from "./db/connect";
require("dotenv").config();


//Middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/articles", articles);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    if (process.env.MONGO_URI) {
      await connectDB(process.env.MONGO_URI);
      console.log("Connected to db..")
    }
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
