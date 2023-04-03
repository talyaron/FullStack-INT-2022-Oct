import express from "express";
// import bodyParser from "body-parser";
const app = express();
import { router as students } from "./routes/studentsRoute";

//Middleware
app.use(express.static("./public"));
app.use(express.json());
// app.use(express.urlencoded())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//routes
app.use("/api/v1/students", students);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
