var form = document.querySelector("#theForm");
var itemsRoot = document.querySelector('#itemsRoot');
function handleAddItem(event) {
    try {
        event.preventDefault();
        console.log(event);
        var name = event.target.elements.name.value;
        var image = event.target.elements.image.value;
        var link = event.target.elements.link.value;
        var category = event.target.elements.category.value;
        var allRecipies = getItemsFromStorage();
        var newRecipe = new Recipe(name, link, category, image);
        allRecipies.push(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(allRecipies));
        // const value = localStorage.getItem('recipes');
        // console.log(recipes);
        // event.target.resert();
        // recipes.push(newRecipe)
        // renderItems(recipes,'itemRoot');
        // console.dir(recipes)
        console.log(name);
        window.location.href = './index.html';
    }
    catch (error) {
        console.error(error);
    }
}
function renderItems(recipes) {
    try {
        if (!recipes || !Array.isArray(recipes))
            throw new Error("recipes is not an array");
        console.dir(recipes);
        var html = recipes.map(function (recipe) {
            return "\n              <a href=\"" + recipe.link + "\"\n                <div class=\"recipe-item\" >\n                  <h1>" + recipe.name + " </h1>\n                  <img class=\"recipe-img\"src=" + recipe.img + " /> \n                  <p>" + recipe.category + " </p>\n                  \n              </div>\n            </a>\n\n        ";
        })
            .join(" ");
        // console.log(html);
        itemsRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// function handleLoad() {
//   // const tempRecipes=JSON.parse(localStorage.getItem("Recipes"));
//   renderItems(recipes)
// }
// function handleDeleteItem(uid) {
//   try {
//     console.log(uid);
//     var index = recipes.findIndex(function (item) { return item.uid === uid; });
//     if (index === -1)
//       throw new Error("item not found");
//     recipes.splice(index, 1);
//     if (!itemsRoot)
//       throw new Error("ItemRoot is undefined");
//     renderItems(recipes);
//     localStorage.setItem("items", JSON.stringify(recipes))
//   }
//   catch (error) {
//     console.error(error);
//   }
// }
function getItemsFromStorage() {
    try {
        var recipeString = localStorage.getItem("recipes");
        if (!recipeString)
            throw new Error("Couldn't find items in the storage");
        console.dir({ recipeString: recipeString, msg: "This is recipe string" });
        var recipes = JSON.parse(recipeString);
        console.dir({ recipes: recipes, msg: "This is recipes after parsed in JSON" });
        return recipes;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
// function handleSaveRecipe() {
//   console.log('save recipes');
//   localStorage.setRecipe('items', JSON.stringify(recipes || []));
// }
