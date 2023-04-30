import express from "express";
const router = express.Router();
import { 
    addCollections,
     getCollection
 } from "./collectionsControls";

router
.post("/add-collections", addCollections)
.get("/get-collections", getCollection)
export default router;
