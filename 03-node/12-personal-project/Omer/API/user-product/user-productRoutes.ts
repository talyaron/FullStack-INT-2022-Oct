import express from "express";
const UserProducttrouter = express.Router();

import { addUserProduct, deleteUserProducts, getUserProducts } from "./user-productControls";

UserProducttrouter.post("/add-user-product", addUserProduct).get("/get-user-product", getUserProducts).delete("/delete-user-product", deleteUserProducts)

export default UserProducttrouter;