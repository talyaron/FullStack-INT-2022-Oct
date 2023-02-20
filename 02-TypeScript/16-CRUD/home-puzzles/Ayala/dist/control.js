function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.value;
        var category = ev.target.elements.category.value;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, color, price, category, sn));
        console.log(items);
        ev.target.reset();
        console.log(name);
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
        itemsRoot.innerHTML = renderItems(items);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdatePrice(uid) {
    try {
        console.log(uid);
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        items[index].price = Number(form.elements.price.value);
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
        itemsRoot.innerHTML = renderItems(items);
    }
    catch (error) {
        console.error(error);
    }
}
function renderItems(items) {
    try {
        if (!items || !Array.isArray(items))
            throw new Error("items is not an array");
        var html = items
            .map(function (item) {
            return "\n       <img class=\"item\"style =\"image\" src:" + item.image + "\">\n    <div class=\"item\" style=\"background-color:" + item.color + "\">\n      <h3>" + item.name + "</h3>\n      <div>Price: " + item.price + " <button onclick=\"handleUpdatePrice('" + item.uid + "')\">Update</button></div>\n      <div>Category: " + item.category + "</div>\n      <div>S/N: " + item.sn + "</div>\n      <button onclick=\"handleDeleteItem('" + item.uid + "')\">Remove</button>\n    </div>\n    ";
        })
            .join(" ");
        console.log(html);
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleDeleteItem(uid) {
    try {
        console.log(uid);
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        items.splice(index, 1);
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
        itemsRoot.innerHTML = renderItems(items);
    }
    catch (error) {
        console.error(error);
    }
}
