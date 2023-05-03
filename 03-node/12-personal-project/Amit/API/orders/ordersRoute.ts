import express from "express"
const router = express.Router()


import { 
    createOrder,
 } from "./ordersControl"

router
  .post("/create-order", createOrder)
  
export default router