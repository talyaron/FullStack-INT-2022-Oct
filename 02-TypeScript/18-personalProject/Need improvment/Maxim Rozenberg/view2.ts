const itemsRoot = document.querySelector("#itemsRoot");

function showMyRecipe(){


    console.log("showMyRecipes function activated");
   
    const name = (JSON.parse(localStorage.getItem("users")!))

    const myRecipeHead = document.querySelector(".myRecipe") as HTMLElement
    myRecipeHead.textContent = `${name[0].name} recipe page`
    
    
    
}
showMyRecipe()


const showRecipe = (JSON.parse(localStorage.getItem("recipes")!))
console.log(showRecipe);

function renderItems(showRecipe: Recipe[], renderElementId: string): void {
    console.log("Reneder Function activated");
    
    try {
      if (!showRecipe || !Array.isArray(showRecipe))
        throw new Error("items is not an array");
  
      
    const html = showRecipe.map((showRecipe) => {
          console.log(`---${showRecipe.uid}---`);
          return `
      <div class="item" style="background-color:${showRecipe.sort}">
        <h3><u>${showRecipe.name}</u></h3>
        <div><b>Sort:</b> ${showRecipe.sort} <button onclick="handleUpdatePrice()">Update</button></div>
        <div><b>Name:</b> ${showRecipe.name}</div>
        <div><b>Ingredients:</b> ${showRecipe.ingredients}</div>
        <div><b>How to Make:</b> ${showRecipe.preparation}</div>
        <div><img src="${showRecipe.image}" alt="recipe img"></img></div>

        <button onclick="handleDeleteItem('${showRecipe.uid}')">Remove</button>
      </div>
      `;
        })
        .join(" ");
      console.log(showRecipe[0].name + "line 42");
      const element = document.querySelector(`#${renderElementId}`);
      if (!element) throw new Error("Couldnt find element in the DOM");
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
    
  }

renderItems(showRecipe, "itemsRoot")


// function handleDeleteItem(uid: string,  ) {
//     console.log("Delete function activated");
//     console.log(showRecipe);
//     try {
//       console.log(uid);
//     //   const index = showRecipe.findIndex((showRecipe) => showRecipe.uid === uid);
//     //   console.log(index);
//     //   console.log("my new recipe" + showRecipe);
//     const index = showRecipe.findIndex((recipe) => {
//         console.log(recipe.uid, uid);
//         return recipe.uid === uid;
//       });
//       console.log(index);
      
      
//       if (index === -1) throw new Error("recipe not found");
//       showRecipe.splice(index, 1);
  
//       if (!itemsRoot) throw new Error("ItemRoot is undefined");
//       renderItems(showRecipe, "itemsRoot");
//       // localStorage.setItem("items", JSON.stringify(items))
//     } catch (error) {
//       console.error(error);
//     }
   
//   }


  function handleDeleteItem(uid: string) {
    console.log("Delete function activated");
    
    try {
      console.log(uid);
      const index = showRecipe.findIndex((showRecipe) => showRecipe.uid === uid);
      console.log(index);
      console.log("my new recipe" + showRecipe);
      
      if (index === -1) throw new Error("Recipe with specified uid not found");
      showRecipe.splice(index, 1);
  
      if (!itemsRoot) throw new Error("ItemRoot is undefined");
      renderItems(showRecipe, "itemsRoot");
      localStorage.removeItem("recipe_" + uid);
    } catch (error) {
      console.error(error);
    }
   
  }