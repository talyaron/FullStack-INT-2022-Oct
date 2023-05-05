import express from "express";
const Productrouter = express.Router();

import { addProduct, getAllProducts } from "./productControls";

Productrouter.post("/add-product", addProduct).get("/get-products", getAllProducts)

export default Productrouter;