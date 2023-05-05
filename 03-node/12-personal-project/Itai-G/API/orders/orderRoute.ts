import express from "express";
const router = express.Router();
import {
    createOrder,
    getOrders,
    updateOrder,
    getOrderById,
    deleteOrder,
} from "./orderControl";

router
    .post("/create-order", createOrder)
    .get("/get-orders", getOrders)
    .get("/get-order-by-id", getOrderById)
    .delete("/delete-order", deleteOrder)
    .patch("/update-order", updateOrder);

export default router;