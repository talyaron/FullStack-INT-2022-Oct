function showStore(clothesShopArr) {
    try {
        if (store && clothesShopArr.length != 0) {
            var html = "";
            for (var i = 0; i < clothesShopArr.length; i++) {
                html += "<div class= \"store__item\">\n          <img class=\"store__item__detail\" id=\"image\" src='" + clothesShopArr[i].image + "' alt=\"image\"/>\n          <h2 class=\"store__item__detail\" id=\"itemName\">" + clothesShopArr[i].name + "</h2>\n          <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + clothesShopArr[i].department + "</h5>\n          <h5 class=\"store__item__detail\" id=\"itemType\">" + clothesShopArr[i].type + "</h5>\n          <h3 class=\"store__item__detail\" id=\"itemPrice\">" + clothesShopArr[i].price + "</h3>\n          <button onclick=\"handleUpdateItem('" + clothesShopArr[i].uid + "')\">Update Price</button>\n          <button onclick=\"handleDeleteItem('" + clothesShopArr[i].uid + "')\">Delete</button>\n          </div>";
            }
            return html;
        }
        else {
            throw new Error("there is no item in the store");
        }
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function addItem(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var departement = event.target.elements.departement.value;
        var type = event.target.elements.type.value;
        var price = event.target.elements.price.valueAsNumber;
        var image = event.target.elements.image.value;
        clothesShopArr.push(new Item(name, departement, type, price, image));
        handleSaveItems();
        event.target.reset();
        if (!store)
            throw new Error("the store is available");
        store.innerHTML = showStore(clothesShopArr);
    }
    catch (error) {
        console.error(Error);
    }
}
function handleSaveItems() {
    console.log("save items");
    localStorage.setItem("items", JSON.stringify(clothesShopArr));
}
function handleDeleteItem(uid) {
    try {
        console.log(uid);
        var index = clothesShopArr.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        clothesShopArr.splice(index, 1);
        if (!store)
            throw new Error("store is available");
        store.innerHTML = showStore(clothesShopArr);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateItem(uid) {
    try {
        var newPrice = void 0;
        newPrice = prompt("Enter a new price to this item:");
        while (!newPrice || isNaN(newPrice)) {
            newPrice = prompt("You need to enter a number:");
            newPrice = parseInt(newPrice);
        }
        var index = clothesShopArr.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        if (newPrice)
            clothesShopArr[index].price = newPrice;
        if (!store)
            throw new Error("ItemRoot is undefined");
        store.innerHTML = showStore(clothesShopArr);
    }
    catch (error) {
        console.error(error);
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
                    store.innerHTML += "<div class= \"store__item\">\n                    <img class=\"store__item__detail\" id=\"image\" src='" + chosenItemsArr[i].image + "' alt=\"image\"/>\n                    <h2 class=\"store__item__detail\" id=\"itemName\">" + chosenItemsArr[i].name + "</h2>\n                    <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + chosenItemsArr[i].department + "</h5>\n                    <h5 class=\"store__item__detail\" id=\"itemType\">" + chosenItemsArr[i].type + "</h5>\n                    <h3 class=\"store__item__detail\" id=\"itemPrice\">" + chosenItemsArr[i].price + "</h3>\n                    <button onclick=\"handleUpdateItem('" + clothesShopArr[i].uid + "')\">Update Price</button>\n                    <button onclick=\"handleDeleteItem('" + clothesShopArr[i].uid + "')\">Delete</button>\n                    </div>";
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
                store.innerHTML += "<div class= \"store__item\">\n                <img class=\"store__item__detail\" id=\"image\" src='" + sortedArr[i].image + "' alt=\"image\"/>\n                <h2 class=\"store__item__detail\" id=\"itemName\">" + sortedArr[i].name + "</h2>\n                <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + sortedArr[i].department + "</h5>\n                <h5 class=\"store__item__detail\" id=\"itemType\">" + sortedArr[i].type + "</h5>\n                <h3 class=\"store__item__detail\" id=\"itemPrice\">" + sortedArr[i].price + "</h3>\n                <button onclick=\"handleUpdateItem('" + clothesShopArr[i].uid + "')\">Update Price</button>\n                <button onclick=\"handleDeleteItem('" + clothesShopArr[i].uid + "')\">Delete</button>\n                </div>";
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
                    store.innerHTML += "<div class= \"store__item\">\n                    <img class=\"store__item__detail\" id=\"image\" src='" + chosenItemsArr[i].image + "' alt=\"image\"/>\n                    <h2 class=\"store__item__detail\" id=\"itemName\">" + chosenItemsArr[i].name + "</h2>\n                    <h5 class=\"store__item__detail\" id=\"itemDepartment\">" + chosenItemsArr[i].department + "</h5>\n                    <h5 class=\"store__item__detail\" id=\"itemType\">" + chosenItemsArr[i].type + "</h5>\n                    <h3 class=\"store__item__detail\" id=\"itemPrice\">" + chosenItemsArr[i].price + "</h3>\n                    <button onclick=\"handleUpdateItem('" + clothesShopArr[i].uid + "')\">Update Price</button>\n                    <button onclick=\"handleDeleteItem('" + clothesShopArr[i].uid + "')\">Delete</button>\n                    </div>";
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
