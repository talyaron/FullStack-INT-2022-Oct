import express from "express";
const router = express.Router();
import { addCollections } from "./collectionsControls";

router
.post("/add-collections", addCollections)
export default router;
