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
function render(ele, items) {
    try {
        var element = document.querySelector(ele.toString());
        if (!element)
            throw new Error("Element does not exits");
        if (!items)
            throw new Error("Items empty");
        items.sort((function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }));
        var html = items.map(function (item) {
            return "\n            <div class=\"main__card\">\n                <h2>" + item.name + "</h2>\n                <h4>Price: " + item.price + "</h4>\n                <h4>Size: " + item.size + "</h4>\n                <h4>Type: " + item.type + "</h4>\n                <img src=\"" + item.img + "\" alt=\"cart\">\n                <button onclick=\"deleteProduct('" + item.id + "')\">Delete</button>\n            </div>\n            ";
        }).join("\n");
        console.log(html);
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderStore(ele, items) {
    try {
        var element = document.querySelector(ele.toString());
        if (!element)
            throw new Error("Element does not exits");
        element.innerHTML = "No products at the moment";
        if (items.length == 0) {
            throw new Error("Items empty");
        }
        var html = items.map(function (item) {
            return "\n            <div class=\"main__card\">\n                <h2>" + item.name + "</h2>\n                <h4>Price: " + item.price + "</h4>\n                <h4>Size: " + item.size + "</h4>\n                <h4>Type: " + item.type + "</h4>\n                <img src=\"" + item.img + "\" alt=\"cart\">\n            </div>\n            ";
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
        render(".test", getItems());
        renderStore(".main", getItems());
    }
    catch (error) {
        console.error(error);
    }
}
sortName.addEventListener('click', function () {
    try {
        var temp = getItems();
        if (!temp)
            throw new Error("Items empty");
        temp.sort((function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }));
        renderStore(".main", temp);
    }
    catch (error) {
        console.error(error);
    }
});
sortPrice.addEventListener('click', function () {
    try {
        var temp = getItems();
        if (!temp)
            throw new Error("Items empty");
        temp.sort((function (a, b) {
            if (a.price > b.price) {
                return -1;
            }
            if (a.price < b.price) {
                return 1;
            }
            return 0;
        }));
        renderStore(".main", temp);
    }
    catch (error) {
        console.error(error);
    }
});
sortType.addEventListener('click', function () {
    try {
        var temp = getItems();
        if (!temp)
            throw new Error("Items empty");
        temp.sort((function (a, b) {
            if (a.type > b.type) {
                return -1;
            }
            if (a.type < b.type) {
                return 1;
            }
            return 0;
        }));
        renderStore(".main", temp);
    }
    catch (error) {
        console.error(error);
    }
});
ham.addEventListener('click', function () {
    try {
        if (!hamTop || !hamMid || !hamBottom || !menu)
            throw new Error("No elements");
        if (change) {
            hamTop.classList.add("closeTop");
            hamMid.classList.add("closeMid");
            hamBottom.classList.add("closeBottom");
            menu.classList.add("menuShow");
            change = false;
        }
        else {
            hamTop.classList.remove("closeTop");
            hamMid.classList.remove("closeMid");
            hamBottom.classList.remove("closeBottom");
            menu.classList.remove("menuShow");
            change = true;
        }
    }
    catch (error) {
        console.error(error);
    }
});
