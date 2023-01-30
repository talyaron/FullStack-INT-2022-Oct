var itemsRoot = document.querySelector('#itemsRoot');
function getItemsFromStorage() {
    try {
        //get items from storage
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("Couldn't find items in storage");
        //convert to array
        var items = JSON.parse(itemsString);
        return items;
        console.log(items);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
