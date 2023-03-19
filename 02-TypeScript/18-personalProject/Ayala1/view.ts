


 

function renderItemsFromStoreage():Recipe[]| undefined{
    try {
        const recipesString=localStorage.getItem('recipes')
        if(!recipesString) throw new Error('Couldnt find items in  storage');

        const recipes=JSON.parse(recipesString);
        return recipes;
        console.log(recipes)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
