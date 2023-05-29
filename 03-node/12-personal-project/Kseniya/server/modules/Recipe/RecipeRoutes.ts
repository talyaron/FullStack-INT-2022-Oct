import express from "express";
const router = express.Router();

import { addRecipe, getRecipes } from "./RecipeControl";

router.get("/all", getRecipes).post("/add", addRecipe);

export default router