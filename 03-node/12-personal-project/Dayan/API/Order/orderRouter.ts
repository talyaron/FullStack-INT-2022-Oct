import express from "express";
const orderRouter = express.Router();

import isUserLogin from "../../middlewares/isUserLogin";

import isAdminLogin from "../../middlewares/isAdminLogin";
import isAdmin from "../../middlewares/isAdmin";

import { createOrder, getSum, getAllOrders } from "./orderCtrl"

orderRouter
    .post("/create-order", isUserLogin, createOrder)
    .get("/get-all-orders", isAdminLogin, isAdmin, getAllOrders)
    .get("/get-sum", isAdminLogin, isAdmin, getSum)

export default orderRouter