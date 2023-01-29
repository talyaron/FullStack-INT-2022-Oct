var form = document.querySelector("#theForm");
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var size = ev.target.elements.size.valueAsNumber;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, color, price, category, size, sn));
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
            var itemUID = item.uid;
            console.log("---" + itemUID + "---");
            return "\n      <div class=\"item\" style=\"background-color:" + item.color + "\">\n        <h3>" + item.name + "</h3>\n        <div>Price: " + item.price + "</div>\n        <button onclick=\"handleUpdatePrice('" + itemUID + "')\">Update</button>\n        <div>Category: " + item.category + "</div>\n        <div>Size: " + item.size + "</div>\n        <div>S/N: " + item.sn + "</div>\n        <button onclick=\"handleDeleteItem('" + itemUID + "')\">Remove</button>\n      </div>\n    ";
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
function handleUpdatePrice(uid) {
    try {
        var index = items.findIndex(function (item) { return item.uid === uid; });
        console.log(index);
        if (index === -1)
            throw new Error("item not found");
        var newPrice = prompt("Enter new price");
        console.log(newPrice);
        if (!newPrice || Number.isNaN(newPrice))
            throw new Error("Please enter price!!!");
        items[index].price = parseInt(newPrice);
        itemsRoot.innerHTML = renderItems(items);
    }
    catch (error) {
        console.log(error);
    }
}
