const form = document.querySelector("#theForm");
const itemsRoot = document.querySelector('#itemsRoot');

function handleAddItem(event: any) {
  try {

    event.preventDefault();
    console.log(event);
    const name = event.target.elements.name.value;
    const image = event.target.elements.image.value;
    const link = event.target.elements.link.value;
    const category = event.target.elements.category.value;
    const allRecipies = getItemsFromStorage();
    const newRecipe = new Recipe(name, link, category, image);
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
  } catch (error) {
    console.error(error);

  }


}



function renderItems(recipes: Recipe[]): void {
  try {
    if (!recipes || !Array.isArray(recipes))
      throw new Error("recipes is not an array");
    console.dir(recipes)
    const html = recipes.map((recipe) => {

      return `
              <a href="${recipe.link}"
                <div class="recipe-item" >
                  <h1>${recipe.name} </h1>
                  <img class="recipe-img"src=${recipe.img} /> 
                  <p>${recipe.category} </p>
                  
              </div>
            </a>

        `;

    })
      .join(" ");
    // console.log(html);
    itemsRoot!.innerHTML = html
  } catch (error) {
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
    const recipeString = localStorage.getItem("recipes");
    if (!recipeString) throw new Error("Couldn't find items in the storage");
    console.dir({ recipeString, msg: "This is recipe string" });

    const recipes = JSON.parse(recipeString);
    console.dir({ recipes, msg: "This is recipes after parsed in JSON" });
    return recipes

  } catch (error) {
    console.error(error);
    return [];
  }
}

// function handleSaveRecipe() {
//   console.log('save recipes');
//   localStorage.setRecipe('items', JSON.stringify(recipes || []));
// }

