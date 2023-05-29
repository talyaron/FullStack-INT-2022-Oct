import express from "express";
const reviewRouter = express.Router();

import isUserLogin from "../../middlewares/isUserLogin";

import { createReview  } from "./reviewCtrl"


reviewRouter
    .post("/create-review/:productID", isUserLogin, createReview)

export default reviewRouter