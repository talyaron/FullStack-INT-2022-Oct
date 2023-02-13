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



let nextRecipeId = 4;

const addRecipeButton = document?.getElementById("add-recipe-button") as HTMLButtonElement;
const addRecipeModal = document?.getElementById("add-recipe-modal") as HTMLDivElement;
const addRecipeModalClose = document?.getElementById("add-recipe-modal-close") as HTMLButtonElement;
const addRecipeModalSave = document?.getElementById("add-recipe-modal-save") as HTMLButtonElement;
const addRecipeNameInput = document?.getElementById("add-recipe-name-input") as HTMLInputElement;
const addRecipeIngredientsInput = document?.getElementById("add-recipe-ingredients-input") as HTMLTextAreaElement;
const addRecipeInstructionsInput = document?.getElementById("add-recipe-instructions-input") as HTMLTextAreaElement;

let storageRecipes = localStorage.getItem('RECIPES')

let recipes = storageRecipes ? JSON.parse(storageRecipes) : startingRecipes


addRecipeButton?.addEventListener("click", () => {
    addRecipeModal.style.display = "block";
});

addRecipeModalClose?.addEventListener("click", () => {
    window.location.href = '../recipe-book/recipe-book.html'
});


addRecipeModalSave.addEventListener("click", () => {
    const name = addRecipeNameInput.value;
    const ingredients = addRecipeIngredientsInput.value.split("\n");
    const instructions = addRecipeInstructionsInput.value;

    const newRecipe: Recipe = {
        id: nextRecipeId++,
        name,
        ingredients,
        instructions
    };

    recipes.push(newRecipe);

    localStorage.setItem('RECIPES', JSON.stringify(recipes))

    addRecipeNameInput.value = "";
    addRecipeIngredientsInput.value = "";
    addRecipeInstructionsInput.value = "";

    window.location.href = '../recipe-book/recipe-book.html'
});
