import mongoose, { Schema } from "mongoose";

export interface IRecipe {
  name: string;
  img: string;
  userName: string;
  likes: number;
  ingredients: string[];
  instructions: string[];
}

export const RecipeSchema = new Schema({
  name: String,
  img: String,
  userName: String,
  likes: Number,
  ingredients: [String],
  instructions: [String],
});

const RecipeModel = mongoose.model("recipe", RecipeSchema);

export default RecipeModel;
