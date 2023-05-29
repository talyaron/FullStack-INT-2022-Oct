import RecipeModel from "./RecipeModel";

export const getRecipes = async (req: any, res: any) => {
  try {
    const recipes = await RecipeModel.find({});
    res.send(recipes);
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addRecipe = async (req: any, res: any) => {
  try {
    const  recipe  = req.body;
    const recipeDB = await RecipeModel.create({
      userName: recipe.userName,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      name: recipe.name,
      img: recipe.img,
    });

    return recipeDB;
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
