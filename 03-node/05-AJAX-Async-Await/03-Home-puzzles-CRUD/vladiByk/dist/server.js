"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import bodyParser from "body-parser";
const app = express_1.default();
const studentsRoute_1 = require("./routes/studentsRoute");
//Middleware
app.use(express_1.default.static("./public"));
app.use(express_1.default.json());
// app.use(express.urlencoded())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
//routes
app.use("/api/v1/students", studentsRoute_1.router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
