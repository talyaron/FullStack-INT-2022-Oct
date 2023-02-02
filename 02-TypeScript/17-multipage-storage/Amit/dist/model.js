var items = [];
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        items.push();
        localStorage.setItem('item', JSON.stringify(items));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function getItemsFromStorage() {
    try {
        var itemsString = localStorage.getItem('items');
        if (!itemsString)
            throw new Error("could not find item");
        var items_1 = JSON.parse(itemsString);
        return items_1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
