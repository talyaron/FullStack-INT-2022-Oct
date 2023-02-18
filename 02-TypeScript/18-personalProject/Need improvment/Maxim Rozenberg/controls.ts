
function enterToMainPage(ev: any){
    try {
        ev.preventDefault()
        console.log(ev);
        const name = ev.target.elements.name.value;
        const lastName = ev.target.elements.lastName.value;
        const email = ev.target.elements.email.value;
        users.push(new User(name, lastName, email))
        console.log("enterToMainPage Function Work");
        console.log(users);
        ev.target.reset();
       
     
        
    } catch (error) {
        console.error(error)
        
    }
    location.href = 'main.html'
  
}

function handleRecipeToArray(ev: any){
    try {
        ev.preventDefault()
        console.log(ev);
        const category = ev.target.elements.category.value;
        const name = ev.target.elements.name.value;
        const ingredients = ev.target.elements.ingredients.value;
        const preparation = ev.target.elements.preparation.value;
        const image = ev.target.elements.image.value;
        
        recipes.push(new Recipe(category, name, ingredients,preparation,image))
        ev.target.reset();
        handleSaveRecipe()
        console.log(recipes);

    } catch (error) {
        console.error(error);
    }
}

function handleSaveUsers(){
    console.log('save users');
    localStorage.setItem('users',JSON.stringify(users));
  }
function handleSaveRecipe(){
    console.log('save recipe');
    localStorage.setItem('recipes',JSON.stringify(recipes));
  }

  function showName(){
    const mainHeader = document.querySelector(".mainHeader")!
    console.log("showName function activated");
    const name = (JSON.parse(localStorage.getItem("users")!))
    mainHeader.textContent = `Welcome ${name[0].name} to Your Recipes page`
}

showName()
