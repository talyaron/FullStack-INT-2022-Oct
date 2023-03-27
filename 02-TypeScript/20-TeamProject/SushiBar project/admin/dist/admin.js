//creating local storage for items for the first time only
if (!localStorage.getItem("items")) {
    localStorage.setItem("items", JSON.stringify([]));
    for (var i = 0; i < itemsTemp.length; i++) {
        var element = itemsTemp[i];
        pushToStorage(element);
    }
    renderToAdmin(".display", getItems());
}
else {
    var str = localStorage.getItem("items");
    if (str == "[]") {
        for (var i = 0; i < itemsTemp.length; i++) {
            var element = itemsTemp[i];
            pushToStorage(element);
        }
    }
    renderToAdmin(".display", getItems());
}
//adding to storage
function pushToStorage(item) {
    try {
        var temp = getItems();
        if (temp != null) {
            temp.push(item);
            localStorage.setItem("items", JSON.stringify(temp));
        }
        else {
            localStorage.setItem("items", JSON.stringify(item));
        }
    }
    catch (error) {
        console.error(error);
    }
}
//adding event listener to form
try {
    if (!form)
        throw new Error("Form was not found");
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        if (!ev.target)
            throw new Error("Target of event is null");
        var name = ev.target.elements.name.value;
        var details = ev.target.elements.details.value;
        var img = ev.target.elements.img.value;
        var price = ev.target.elements.price.value;
        var type = ev.target.elements.type.value;
        var item = new Item(name, img, details, price, type);
        pushToStorage(item);
        if (!getItems())
            throw new Error("Item could not be added to storage");
        renderToAdmin(".display", getItems());
        renderMeals();
        ev.target.reset();
    });
}
catch (error) {
    console.error(error);
}
//revealing adding form
var changeBoolean = true;
try {
    if (!revealBtn)
        throw new Error("No HTML element");
    revealBtn.addEventListener("click", function () {
        if (!form)
            throw new Error("Form not found");
        if (changeBoolean) {
            form.classList.remove("none");
            revealBtn.innerText = "Dismiss";
            changeBoolean = false;
        }
        else {
            form.classList.add("none");
            revealBtn.innerText = "Add";
            changeBoolean = true;
        }
    });
}
catch (error) {
    console.error(error);
}
//render
function renderToAdmin(whereTo, items) {
    var display = document.querySelector(whereTo);
    if (!display)
        throw new Error("Display not found");
    if (!items)
        throw new Error("Items empty");
    var html = items.map(function (item) {
        return "\n        <div class=\"display__card\">\n            <div class=\"display__card__item\">\n                <div class=\"display__card__item__headlineImg\">\n                    <img src=\"" + item.imgLink + "\" width=\"100px\" height=\"100px\">\n                </div>\n                <div class=\"display__card__item__details\">\n                    <h2>" + item.name + "</h2>\n                    <h5>" + item.details + "</h5>\n                    <h4>" + item.price + "</h4>\n                </div>\n            </div>\n            <div class=\"display__card__change\">\n                <button id=\"delete\" onclick=\"deleteFromAdmin('" + item.uid + "')\">Delete</button>\n                <a href=\"#change\"><button id=\"update\" onclick=\"updateFromAdmin('" + item.uid + "')\">Uptade</button></a>\n            </div>\n        </div>\n        ";
    }).join("\n");
    display.innerHTML = html;
}
//delete item
function deleteFromAdmin(id) {
    try {
        var items = getItems();
        if (!items)
            throw new Error("No items");
        var index = items.findIndex(function (item) { return item.uid == id.toString(); });
        if (index == -1)
            throw new Error("Item is not in storage");
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
        renderToAdmin(".display", getItems());
        renderMeals();
    }
    catch (error) {
        console.error(error);
    }
}
//update item
function updateFromAdmin(id) {
    try {
        var items = getItems();
        if (!items)
            throw new Error("No items");
        var index = items.findIndex(function (item) { return item.uid == id.toString(); });
        if (index == -1)
            throw new Error("Item is not in storage");
        var item = items[index];
        var html = "\n            <form class=\"form\" id=\"changeForm\">\n                <input type=\"text\" name=\"name\" placeholder=\"" + item.name + "\">\n                <textarea name=\"details\"cols=\"30\" rows=\"10\" placeholder=\"" + item.details + "\"></textarea>\n                <input type=\"number\" name=\"price\" placeholder=\"" + item.price + "\">\n                <input type=\"text\" name=\"img\" placeholder=\"" + item.imgLink + "\">\n                <a href=\"#theForm\"><input class=\"btn\" type=\"submit\" value=\"Submit\"></a>\n            </form>\n        ";
        if (!change)
            throw new Error("HTML element not found");
        change.innerHTML = html;
        updateItem(item, index);
    }
    catch (error) {
        console.error(error);
    }
}
function updateItem(item, index) {
    try {
        var changeForm = document.getElementById("changeForm");
        if (!changeForm)
            throw new Error("Form not found");
        changeForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            if (!ev.target)
                throw new Error("Target of event is null");
            var name = ev.target.elements.name.value;
            var details = ev.target.elements.details.value;
            var img = ev.target.elements.img.value;
            var price = ev.target.elements.price.value;
            if (name) {
                item.name = name;
            }
            if (details) {
                item.details = details;
            }
            if (price) {
                item.price = price;
            }
            if (img) {
                item.imgLink = img;
            }
            var items = getItems();
            if (!items)
                throw new Error("No items");
            items[index] = item;
            localStorage.setItem("items", JSON.stringify(items));
            renderToAdmin(".display", getItems());
            renderMeals();
            change.innerHTML = "";
        });
    }
    catch (error) {
        console.error(error);
    }
}
