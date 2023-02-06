var User = /** @class */ (function () {
    function User(name, lastName, email) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.uid = uid();
    }
    return User;
}());
var users = [];
var Recipe = /** @class */ (function () {
    function Recipe(sort, name, ingredients, preparation, image, user) {
        this.sort = sort;
        this.name = name;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.image = image;
        this.user = user;
        this.uid = uid();
    }
    return Recipe;
}());
var recipes = [];
