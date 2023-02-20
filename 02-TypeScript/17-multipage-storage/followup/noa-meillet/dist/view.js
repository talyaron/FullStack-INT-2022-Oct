var store = document.querySelector(".store");
function getItemsFromStorage() {
    try {
        //get items from storage
        var itemsString = localStorage.getItem("clothesShopArr");
        if (!itemsString)
            throw new Error("Couldn't find items in storage");
        //convert to array
        var items = JSON.parse(itemsString);
        return items;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
