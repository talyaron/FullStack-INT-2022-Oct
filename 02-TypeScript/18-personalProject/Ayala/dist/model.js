//   class Poduct {
//     constructor(public name:string, ) {
//     }
// }
// // const recipe: Recipe[] = [];
// // recipe.push(new Recipe('cake', ''))
// // console.log(recipe)
var Recipe = /** @class */ (function () {
    function Recipe(name, price, category, img) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.img = img;
        this.uid = name + price + category;
    }
    return Recipe;
}());
var recipes = [
    new Recipe('Chocolate Cake', 120, 'cakes', "https://sivan-ohayon.co.il/wp-content/uploads/2023/01/20230127_205310-2048x1968.jpg"),
    new Recipe('Cheese Cake ', 130, 'cakes', "https://sivan-ohayon.co.il/wp-content/uploads/2022/05/20220524_130803-scaled.jpg"),
    new Recipe('Yeast Cake ', 100, 'cakes', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXsK6hmfw2HDaAiohCfC3lnXGuDKXPf6dVA&usqp=CAU"),
];
// console.log(recipes)
