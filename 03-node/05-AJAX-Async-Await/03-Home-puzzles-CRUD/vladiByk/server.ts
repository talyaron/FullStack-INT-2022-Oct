import express from "express";
const app = express();
import { router as students } from "./routes/students";

//Middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/articles", students);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
