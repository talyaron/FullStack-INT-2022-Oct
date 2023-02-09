var form = document.querySelector("#theForm");
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var sn = ev.target.elements.sn.value;
        var img = ev.target.elements.img.value;
        items.push(new Item(name, color, price, category, sn, img));
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
function handleChangerColor(ev) {
    try {
        console.log(ev);
        var color = ev.target.value;
        document.body.style.backgroundColor = color;
    }
    catch (error) {
        console.error(error);
    }
}
function handleViewPassword() {
    try {
        var passwordElement = document.querySelector("#pass");
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
        }
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
            console.log("---" + item.uid + "---");
            return "\n    <div class=\"item\" style=\"background-color:" + item.color + "\">\n      <h3>" + item.name + " <button onclick=\"newName('" + item.uid + "')\">Update</button></h3>\n      <div>Price: " + item.price + " <button onclick=\"newPrice('" + item.uid + "')\">Update</button></div>\n      <div>Category: " + item.category + "  <button onclick=\"newCategory('" + item.uid + "')\">Update</button></div>\n      <div>S/N: " + item.sn + " <button onclick=\"newSN('" + item.uid + "')\">Update</button></div>\n      <button onclick=\"handleDeleteItem('" + item.uid + "')\">Remove</button>\n      <img src='" + item.img + "'/>\n    </div>\n    ";
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
function newPrice(uid) {
    try {
        var priceUpdate = prompt("add new price");
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("items not found");
        if (items[index].price) {
            items[index].price = parseInt(priceUpdate);
            if (!itemsRoot)
                throw new Error("ItemRoot is undefined");
            itemsRoot.innerHTML = renderItems(items);
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function newSN(uid) {
    try {
        var priceUpdate = prompt("add new SN");
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("items not found");
        if (items[index].sn) {
            items[index].sn = priceUpdate;
            if (!itemsRoot)
                throw new Error("ItemRoot is undefined");
            itemsRoot.innerHTML = renderItems(items);
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function newCategory(uid) {
    try {
        var priceUpdate = prompt("add new Category");
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("items not found");
        if (items[index].category) {
            items[index].category = priceUpdate;
            if (!itemsRoot)
                throw new Error("ItemRoot is undefined");
            itemsRoot.innerHTML = renderItems(items);
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function newName(uid) {
    try {
        var priceUpdate = prompt("add new Name");
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("items not found");
        if (items[index].name) {
            items[index].name = priceUpdate;
            if (!itemsRoot)
                throw new Error("ItemRoot is undefined");
            itemsRoot.innerHTML = renderItems(items);
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
