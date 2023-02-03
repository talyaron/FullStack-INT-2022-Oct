var form = document.querySelector("#theForm");
function handleAddItem(event) {
    try {
        event.preventDefault();
        console.log(event);
        var name = event.target.elements.name.value;
        var color = event.target.elements.color.value;
        var price = event.target.elements.price.valueAsNumber;
        var category = event.target.elements.category.value;
        var sn = event.target.elements.sn.value;
        var img = event.target.elements.img.value;
        items.push(new Item(name, color, price, category, sn, img));
        console.log(items);
        event.target.reset();
        console.log(name);
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
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
function handleDeleteItem(uid) {
    try {
        console.log(uid);
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        items.splice(index, 1);
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
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
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function handleSaveItems() {
    console.log('save items');
    localStorage.setItem('items', JSON.stringify(items));
}
function renderItems(items, renderElementId) {
    try {
        if (!items || !Array.isArray(items))
            throw new Error("items is not an array");
        var html = items
            .map(function (item) {
            console.log("---" + item.uid + "---");
            return " <div class=\"item\" style=\"background-color:" + item.color + "\">\n        <h3>" + item.name + "</h3>\n        <div>Price: " + item.price + " <button onclick=\"handleUpdatePrice()\">Update</button></div>\n        <div>Category: " + item.category + "</div>\n        <div>Size: " + item.color + "</div>\n        <div>S/N: " + item.sn + "</div>\n        <button onclick=\"handleDeleteItem('" + item.uid + "')\">Remove</button>\n      </div>\n      ";
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
