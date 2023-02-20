function showStore(clothesShopArr) {
    try {
        if (store && clothesShopArr.length != 0) {
            store.innerHTML = "";
            for (var i = 0; i < clothesShopArr.length; i++) {
                store.innerHTML += "<div class= \"store__item\">\n                <img class=\"store__item__detail\" id=\"image\" src='" + clothesShopArr[i].image + "' alt=\"image\"/>\n                <h2 class=\"store__item__detail\" id=\"itemName\">" + clothesShopArr[i].name + "</h2>\n                <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + clothesShopArr[i].department + "</h5>\n                <h5 class=\"store__item__detail\" id=\"itemType\">" + clothesShopArr[i].type + "</h5>\n                <h3 class=\"store__item__detail\" id=\"itemPrice\">" + clothesShopArr[i].price + "</h3>\n                </div>";
            }
        }
        else {
            throw new Error("there is no item in the store");
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function getAllItemInType(clothesArr) {
    try {
        if (clothesArr.length == 0)
            throw new Error("there is no item in the store");
        var typeGetFromUser_1;
        while (!typeGetFromUser_1) {
            typeGetFromUser_1 = prompt("Enter the type of item you will want to buy:");
        }
        var chosenItemsArr = clothesArr.filter(function (item) { return item.type == typeGetFromUser_1; });
        if (chosenItemsArr.length == 0)
            throw new Error("items from type " + typeGetFromUser_1 + " is availble in our store");
        else {
            if (store) {
                store.innerHTML = " ";
                for (var i = 0; i < chosenItemsArr.length; i++) {
                    store.innerHTML += "<div class= \"store__item\">\n                  <img class=\"store__item__detail\" id=\"image\" src='" + chosenItemsArr[i].image + "' alt=\"image\"/>\n                  <h2 class=\"store__item__detail\" id=\"itemName\">" + chosenItemsArr[i].name + "</h2>\n                  <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + chosenItemsArr[i].department + "</h5>\n                  <h5 class=\"store__item__detail\" id=\"itemType\">" + chosenItemsArr[i].type + "</h5>\n                  <h3 class=\"store__item__detail\" id=\"itemPrice\">" + chosenItemsArr[i].price + "</h3>\n                  </div>";
                }
            }
        }
    }
    catch (error) {
        console.error(error);
        if (store)
            store.innerHTML = "<h1>Item from this type is availble in our store </h1>";
        return false;
    }
}
function sortArrByPrice(clothesArr) {
    try {
        if (clothesArr.length == 0)
            throw new Error("there is no item in the store");
        var sortedArr = clothesArr.sort(function (a, b) { return a.price - b.price; });
        if (store) {
            store.innerHTML = " ";
            for (var i = 0; i < sortedArr.length; i++) {
                store.innerHTML += "<div class= \"store__item\">\n              <img class=\"store__item__detail\" id=\"image\" src='" + sortedArr[i].image + "' alt=\"image\"/>\n              <h2 class=\"store__item__detail\" id=\"itemName\">" + sortedArr[i].name + "</h2>\n              <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + sortedArr[i].department + "</h5>\n              <h5 class=\"store__item__detail\" id=\"itemType\">" + sortedArr[i].type + "</h5>\n              <h3 class=\"store__item__detail\" id=\"itemPrice\">" + sortedArr[i].price + "</h3>\n              </div>";
            }
        }
        return sortedArr;
    }
    catch (error) {
        console.error(error);
        if (store)
            store.innerHTML = "<h1> We did not find item for you </h1>";
        return false;
    }
}
function getTheCheapestItem(clothesArr) {
    try {
        if (clothesArr.length == 0)
            throw new Error("there is no item in the store");
        var sortedArr_1 = sortArrByPrice(clothesArr);
        var chosenItemsArr = void 0;
        if (sortedArr_1) {
            chosenItemsArr = sortedArr_1.filter(function (item) { return item.price == sortedArr_1[0].price; });
            if (chosenItemsArr.length == 0)
                throw new Error("there is no item in the store");
            if (store) {
                store.innerHTML = " ";
                for (var i = 0; i < chosenItemsArr.length; i++) {
                    store.innerHTML += "<div class= \"store__item\">\n                  <img class=\"store__item__detail\" id=\"image\" src='" + chosenItemsArr[i].image + "' alt=\"image\"/>\n                  <h2 class=\"store__item__detail\" id=\"itemName\">" + chosenItemsArr[i].name + "</h2>\n                  <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + chosenItemsArr[i].department + "</h5>\n                  <h5 class=\"store__item__detail\" id=\"itemType\">" + chosenItemsArr[i].type + "</h5>\n                  <h3 class=\"store__item__detail\" id=\"itemPrice\">" + chosenItemsArr[i].price + "</h3>\n                  </div>";
                }
            }
        }
        return chosenItemsArr;
    }
    catch (error) {
        console.error(error);
        if (store)
            store.innerHTML = "<h1> We did not find item for you </h1>";
        return false;
    }
}
