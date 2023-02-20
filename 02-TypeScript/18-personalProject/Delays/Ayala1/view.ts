


 

function renderItemsFromStoreage():Recipe[]| undefined{
    try {
        const recipesString=localStorage.getItem('recipes');
        //recipies can be null or undefined, because nobody added any recipes yet
        //It is not an error, but we need to handle it
        
        if(!recipesString) throw new Error('Couldnt find items in  storage');

        const recipes=JSON.parse(recipesString);
        return recipes;
        console.log(recipes)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
