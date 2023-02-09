var form = document.querySelector("#theForm");
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var img = imgSrc;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var size = ev.target.elements.size.valueAsNumber;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, img, price, category, size, sn));
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
        var img = ev.target.value;
        document.body.style.backgroundImage = img;
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
            return "\n       </ul> <img class=\"userImg\" src=\"" + item.img + "\"/>\n      <h3>" + item.name + "</h3>\n      <div>Price: " + item.price + " <button onclick=\"handleUpdatePrice('" + item.uid + "')\">Update</button></div>\n      <div>Category: " + item.category + "</div>\n      <div>Size: " + item.size + "</div>\n      <div>S/N: " + item.sn + "</div>\n      <button onclick=\"handleDeleteItem('" + item.uid + "')\">Remove</button>\n    </div>\n    ";
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
        var newprice = prompt("what is the new price");
        console.log(uid);
        var index = items.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        items[index].price = Number(newprice);
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
        itemsRoot.innerHTML = renderItems(items);
    }
    catch (error) {
        console.error(error);
    }
}
