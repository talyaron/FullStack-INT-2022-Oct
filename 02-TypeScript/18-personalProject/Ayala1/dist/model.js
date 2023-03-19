var Recipe = /** @class */ (function () {
    function Recipe(name, link, category, img) {
        this.name = name;
        this.link = link;
        this.category = category;
        this.img = img;
        this.uid = name + link + category + img;
    }
    return Recipe;
}());
var defaultRecipies = [
    new Recipe('Chocolate Cake', "https://www.carine.co.il/foody_recipe/%d7%a2%d7%95%d7%92%d7%aa-%d7%a9%d7%95%d7%a7%d7%95%d7%9c%d7%93-%d7%a2%d7%a1%d7%99%d7%a1%d7%99%d7%aa-%d7%91%d7%98%d7%99%d7%a8%d7%95%d7%a3-%d7%a9%d7%9c-%d7%a7%d7%a8%d7%99%d7%9f-%d7%92%d7%95%d7%a8%d7%9f/", 'cakes', "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2021/11/29100848/homeubuntureleasesrelease_20211121093812webappmu-pluginsfoody-white-labeltmp61a48a8fd4101-IHCW3t.jpg"),
    new Recipe('Cheese Cake', "https://sivan-ohayon.co.il/2022/05/24/%d7%a2%d7%95%d7%92%d7%aa-%d7%92%d7%91%d7%99%d7%a0%d7%94-%d7%90%d7%a4%d7%95%d7%99%d7%94-%d7%9c%d7%9c%d7%90-%d7%94%d7%a4%d7%a8%d7%93%d7%aa-%d7%91%d7%99%d7%a6%d7%99%d7%9d/", 'cakes', "https://sivan-ohayon.co.il/wp-content/uploads/2022/05/20220524_130803-scaled.jpg"),
    new Recipe('Yeast Cake', "https://www.foodsdictionary.co.il/Recipes/10198", 'cakes', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXsK6hmfw2HDaAiohCfC3lnXGuDKXPf6dVA&usqp=CAU"),
    new Recipe('Cookies', "https://www.markivsodi.co.il/2021/02/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93-%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%A4%D7%A9%D7%95%D7%98%D7%95%D7%AA/", 'cookies', "https://www.markivsodi.co.il/wp-content/uploads/2021/02/%D7%A2%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93-%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%95%D7%AA-%D7%A4%D7%A9%D7%95%D7%98%D7%95%D7%AA_%D7%9E%D7%A7%D7%95%D7%A9%D7%98%D7%95%D7%AA_1000.jpg"),
    new Recipe('Chocolate Mousse', "https://www.oogio.net/decadent_chocolate_mousse_cake/", 'קינוחים', "https://www.oogio.net/wp-content/uploads/2021/03/decadent_chocolate_cake9-s-2.jpg")
];
console.log("model");
// console.log(recipes)
