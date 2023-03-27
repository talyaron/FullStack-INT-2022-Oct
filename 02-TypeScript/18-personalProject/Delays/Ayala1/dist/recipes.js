var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log('renderItems');
var savedRecipies = getItemsFromStorage();
var recipies;
if (savedRecipies.length > 0) {
    recipies = __spreadArrays(savedRecipies);
}
else {
    recipies = __spreadArrays(defaultRecipies, savedRecipies);
}
localStorage.setItem('recipes', JSON.stringify(recipies));
renderItems(recipies);
console.log(recipies);
