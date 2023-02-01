var items = [];
function handleSaveItems() {
    console.log('save items');
    localStorage.setItem('items', JSON.stringify(items));
}
function getItemsFromStorage() {
    try {
        //get items from storage
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("Couldn't find items in storage");
        //convert to array
        var items_1 = JSON.parse(itemsString);
        return items_1;
        console.log(items_1);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
