var rootItems = document.querySelector("#rootItems");
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        items.push(new Item(name));
        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
        ev.target.reset();
        console.log(name);
        if (!rootItems)
            throw new Error("rootItems is null");
        renderItems(items, "rootItems");
    }
    catch (error) {
        console.error(error);
    }
}
function renderItems(items, renderElementId) {
    try {
        if (!items || !Array.isArray(items))
            throw new Error("items is not an array");
        var html = items
            .map(function (item) {
            return "\n      <div class=\"item\">\n        <h3>" + item.name + "</h3>\n      </div>\n      ";
        })
            .join(" ");
        console.log(html);
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveItems() {
    console.log('save items');
    localStorage.setItem('items', JSON.stringify(items));
}
function getItemsFromStorage() {
    try {
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("Couldn't find items in storage");
        var items = JSON.parse(itemsString);
        return items;
        console.log(items);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
