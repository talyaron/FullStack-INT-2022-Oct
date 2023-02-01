function addItems(items) {
    if (getItems() != null) {
        var temp_1 = getItems();
        items.forEach(function (item) {
            temp_1.push(item);
        });
        localStorage.setItem("items", JSON.stringify(temp_1));
    }
    else {
        localStorage.setItem("items", JSON.stringify(items));
    }
}
function render(ele) {
    try {
        var element = document.querySelector(ele.toString());
        if (!element)
            throw new Error("Element does not exits");
        var items = getItems().sort(function (p1, p2) {
            return (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0;
        });
        console.log(items);
        if (!items)
            throw new Error("Items empty");
        var html = items.map(function (item) {
            return "\n            <div class=\"itemCard\">\n                <h2>" + item.name + "</h2>\n                <h4>Price: " + item.price + "</h4>\n                <h4>Size: " + item.size + "</h4>\n                <h4>Type: " + item.type + "</h4>\n                <img src=\"" + item.img + "\" alt=\"cart\">\n                <button onclick=\"deleteProduct('" + item.id + "')\">Delete</button>\n            </div>\n            ";
        }).join("\n");
        console.log(html);
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderStore(ele) {
    try {
        var element = document.querySelector(ele.toString());
        if (!element)
            throw new Error("Element does not exits");
        var items = getItems().sort(function (p1, p2) {
            return (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0;
        });
        console.log(items);
        element.innerHTML = "No products at the moment";
        if (items.length == 0) {
            throw new Error("Items empty");
        }
        var html = items.map(function (item) {
            return "\n            <div class=\"itemCard\">\n                <h2>" + item.name + "</h2>\n                <h4>Price: " + item.price + "</h4>\n                <h4>Size: " + item.size + "</h4>\n                <h4>Type: " + item.type + "</h4>\n                <img src=\"" + item.img + "\" alt=\"cart\">\n            </div>\n            ";
        }).join("\n");
        console.log(html);
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function deleteProduct(id) {
    var temp = getItems();
    try {
        if (!temp)
            throw new Error("Items empty");
        var i = temp.findIndex(function (item) { return item.id == id.toString(); });
        if (i == -1)
            throw new Error("Item not found");
        temp.splice(i, 1);
        localStorage.setItem("items", JSON.stringify(temp));
        render(".test");
        render(".card");
    }
    catch (error) {
        console.error(error);
    }
}
function hi(id, ele) {
    document.body.style.backgroundColor = "black";
}
