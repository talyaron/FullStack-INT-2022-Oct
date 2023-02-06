// function handleAddItem(ev:any){
//     try{
//         ev.preventDefault();
//         console.log(ev);
//     const name =ev.target.elements.name.value;
//     const price =ev.target.elements.price.value;
//     const category =ev.target.elements.category.value;
//     recipes.push(new Recipe(name,price, category,img ));
//     console.log(recipes);
//     ev.target.reset();
//     console.log(name);
//     if (!itemsRoot) throw new Error("itemsRoot is null");
//     itemsRoot.innerHTML = renderItems(recipe);
//     }catch(error){
//         console.error(error);
//     }
//     }
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var img = ev.target.elements.name.value;
        var price = ev.target.elements.name.value;
        var category = ev.target.elements.name.value;
        recipes.push(new Recipe(name, img, price, category));
        console.log(recipes);
        ev.target.reset();
        console.log(name);
        if (!itemsRoot)
            throw new Error("itemRoot is null");
        renderItems(recipes);
        // itemsRoot.innerHTML=renderItems(recipes)
    }
    catch (error) {
        console.error(error);
    }
}
// function handleUpdatePrice(uid){
//   try {
//     console.log(uid);
//     const index = recipe.findIndex((item) => item.uid === uid);
//     if (index === -1) throw new Error("item not found");
//     recipe[index].price =  Number(form.elements.recipe.value);
//     if (!itemsRoot) throw new Error("ItemRoot is undefined");
//     itemsRoot.innerHTML = renderItems(recipe);
//   } catch (error) {
//     console.error(error);
//   }
// }
function renderItems(items) {
    try {
        if (!items || !Array.isArray(items))
            throw new Error("items is not an array");
        var html = recipes.map(function (recipe) {
            return "\n              <div class=\"recipe-item\" >\n                <h1>" + recipe.name + " </h1>\n                <img class=\"recipe-img\"src=" + recipe.img + " /> \n                <p>" + recipe.price + " </p>\n                <p>" + recipe.category + " </p>\n              </div>\n       \n\n        ";
            //   <div class="item" style="background-color:${item.color}">
            //   <h3>${recipe.name}</h3>
            //   <div>Price: ${recipe.price} <button onclick="handleUpdatePrice('${item.uid}')">Update</button></div>
            //   <div>Category: ${item.category}</div>
            //   <button onclick="handleDeleteItem('${item.uid}')">Remove</button>
            // </div>
        })
            .join(" ");
        // console.log(html);
        itemsRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleLoad() {
    renderItems(recipes);
}
// function handleDeleteItem(uid: string) {
//   try {
//     console.log(uid);
//     const index = recipe.findIndex((recipe) => recipe.uid === uid);
//     if (index === -1) throw new Error("item not found");
//     recipe.splice(index, 1);
//     if (!itemsRoot) throw new Error("ItemRoot is undefined");
//     itemsRoot.innerHTML = renderItems(recipe);
//   } catch (error) {
//     console.error(error);
//   }
// }
// function submitForm() {
//   //קוד לפעולה הרצוייה כאשר לוחצים על כפתור "חיפוש"
// }
