var startingRecipes = [
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
var nextRecipeId = 4;
var addRecipeButton = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-button");
var addRecipeModal = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-modal");
var addRecipeModalClose = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-modal-close");
var addRecipeModalSave = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-modal-save");
var addRecipeNameInput = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-name-input");
var addRecipeIngredientsInput = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-ingredients-input");
var addRecipeInstructionsInput = document === null || document === void 0 ? void 0 : document.getElementById("add-recipe-instructions-input");
var storageRecipes = localStorage.getItem('RECIPES');
var recipes = storageRecipes ? JSON.parse(storageRecipes) : startingRecipes;
addRecipeButton === null || addRecipeButton === void 0 ? void 0 : addRecipeButton.addEventListener("click", function () {
    addRecipeModal.style.display = "block";
});
addRecipeModalClose === null || addRecipeModalClose === void 0 ? void 0 : addRecipeModalClose.addEventListener("click", function () {
    window.location.href = '../recipe-book/recipe-book.html';
});
addRecipeModalSave.addEventListener("click", function () {
    var name = addRecipeNameInput.value;
    var ingredients = addRecipeIngredientsInput.value.split("\n");
    var instructions = addRecipeInstructionsInput.value;
    var newRecipe = {
        id: nextRecipeId++,
        name: name,
        ingredients: ingredients,
        instructions: instructions
    };
    recipes.push(newRecipe);
    localStorage.setItem('RECIPES', JSON.stringify(recipes));
    addRecipeNameInput.value = "";
    addRecipeIngredientsInput.value = "";
    addRecipeInstructionsInput.value = "";
    window.location.href = '../recipe-book/recipe-book.html';
});
