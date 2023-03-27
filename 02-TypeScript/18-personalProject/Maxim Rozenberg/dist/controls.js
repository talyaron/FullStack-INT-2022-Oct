function enterToMainPage(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var lastName = ev.target.elements.lastName.value;
        var email = ev.target.elements.email.value;
        users.push(new User(name, lastName, email));
        console.log("enterToMainPage Function Work");
        console.log(users);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
    location.href = 'main.html';
}
function handleRecipeToArray(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var category = ev.target.elements.category.value;
        var name = ev.target.elements.name.value;
        var ingredients = ev.target.elements.ingredients.value;
        var preparation = ev.target.elements.preparation.value;
        var image = ev.target.elements.image.value;
        recipes.push(new Recipe(category, name, ingredients, preparation, image));
        ev.target.reset();
        handleSaveRecipe();
        console.log(recipes);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveUsers() {
    console.log('save users');
    localStorage.setItem('users', JSON.stringify(users));
}
function handleSaveRecipe() {
    console.log('save recipe');
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
function showName() {
    var mainHeader = document.querySelector(".mainHeader");
    console.log("showName function activated");
    var name = (JSON.parse(localStorage.getItem("users")));
    mainHeader.textContent = "Welcome " + name[0].name + " to Your Recipes page";
}
showName();
