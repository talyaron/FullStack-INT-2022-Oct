interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

const startingRecipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Tomato Sauce", "Ground Beef", "Onions", "Garlic"],
    instructions: "1. Cook spaghetti according to package instructions.\n2. In a separate pan, sauté onions and garlic until softened.\n3. Add ground beef and cook until browned.\n4. Stir in tomato sauce and let simmer for 10 minutes.\n5. Serve sauce over cooked spaghetti."
  },
  {
    id: 2,
    name: "Pancakes",
    ingredients: ["Flour", "Baking Powder", "Salt", "Sugar", "Eggs", "Milk", "Butter"],
    instructions: "1. In a large bowl, whisk together flour, baking powder, salt, and sugar.\n2. In a separate bowl, beat together eggs and milk.\n3. Stir the egg mixture into the dry ingredients until just combined.\n4. Heat a non-stick pan over medium heat and melt a little butter.\n5. Pour batter into the pan to form pancakes.\n6. Cook until bubbles form on the surface, then flip and cook until the other side is golden brown.\n7. Serve with syrup and butter."
  },
  {
    id: 3,
    name: "Chicken Stir-Fry",
    ingredients: ["Chicken Breasts", "Vegetables", "Soy Sauce", "Cornstarch", "Oil"],
    instructions: "1. Cut chicken into thin strips.\n2. In a small bowl, whisk together soy sauce and cornstarch.\n3. Heat a wok or large pan over high heat and add a little oil.\n4. Stir-fry chicken strips until browned.\n5. Add vegetables and continue to stir-fry until tender.\n6. Stir in the soy sauce mixture and continue cooking until sauce thickens.\n7. Serve over rice."
  }
];


let storageRecipes = localStorage.getItem('RECIPES')

let recipes = storageRecipes ? JSON.parse(storageRecipes) : startingRecipes

const recipeList = document?.getElementById("recipe-list") as HTMLUListElement;
const recipeDetails = document?.getElementById("recipe-details") as HTMLDivElement;


function renderRecipes() {
  recipeList.innerHTML = ''
  recipes.forEach((recipe, index) => {
    const listItemRemover = document.createElement('div');
    listItemRemover.className = 'recipe-remover';
    listItemRemover.textContent = 'delete';


    listItemRemover?.addEventListener("click", () => {
      recipes.splice(index, 1)
      localStorage.setItem('RECIPES', JSON.stringify(recipes))
      renderRecipes()
    });

    const listItemWrapper = document.createElement('div')
    listItemWrapper.className = 'recipe-wrapper'
    const listItem = document.createElement("li");
    listItem.className = 'recipe-name'
    listItem.textContent = recipe.name;
    listItem?.addEventListener("click", () => {
      recipeDetails.innerHTML = `
          <h2>${recipe.name}</h2>
          <h3>Ingredients</h3>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
          </ul>
          <h3>Instructions</h3>
          <p>${recipe.instructions}</p>
        `;
      recipeDetails.style.display = 'block'
    });

    listItemWrapper?.appendChild(listItem)

    listItemWrapper?.appendChild(listItemRemover)

    recipeList?.appendChild(listItemWrapper);
  })
}

renderRecipes()


