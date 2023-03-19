function renderItemsFromStoreage() {
    try {
        var recipesString = localStorage.getItem('recipes');
        if (!recipesString)
            throw new Error('Couldnt find items in  storage');
        var recipes = JSON.parse(recipesString);
        return recipes;
        console.log(recipes);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
