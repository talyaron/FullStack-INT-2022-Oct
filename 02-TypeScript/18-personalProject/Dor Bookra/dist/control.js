function handleForm(ev) {
    try {
        ev.preventDefault();
        var img = ev.target.elements.birdImg.value;
        var name = ev.target.elements.birdName.value;
        var size = ev.target.elements.birdSize.value;
        var color = ev.target.elements.birdColor.value;
        var location = ev.target.elements.birdLocation.value;
        var action = ev.target.elements.birdAction.value;
        birds.push(new Bird(img, name, size, color, location, action));
        sendBirdsToStorage();
        ev.target.reset();
        renderForm(birds, "birdCardContainer");
    }
    catch (error) {
        console.error(error);
    }
}
function renderForm(birds, renderElementId) {
    try {
        if (!birds || !Array.isArray(birds))
            throw new Error("birds is not an array");
        var html = birds
            .map(function (birds) {
            return "\n        <div class=\"birdCard\">\n        <img src=\"" + birds.img + "\">\n        <h3>Bird Name: <br>" + birds.name + "</h3>\n        <h3>Color Of The Bird:</h3\n        <p> " + convertSize(birds.size) + "</p>\n        <h3>Color Of The Bird:</h3>\n        <div  class=\"displayColor\"  style= \"background-color:" + birds.color + "\"> </div>\n        <h3>Birds Location:</h3>\n        <p> " + birds.location + "</p>\n        <h3>Birds Action:</h3>\n        <p>" + birds.action + "</p>\n    </div>\n        ";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleItemForm(ev) {
    try {
        ev.preventDefault();
        var img = ev.target.elements.itemImg.value;
        var name = ev.target.elements.itemName.value;
        var desc = ev.target.elements.itemDesc.value;
        var price = ev.target.elements.itemPrice.value;
        items.push(new item(img, name, desc, price));
        ev.target.reset();
        renderItemForm(items, "itemCardContainer");
    }
    catch (error) {
        console.error(error);
    }
}
function renderItemForm(items, renderElementId) {
    try {
        if (!items || !Array.isArray(items))
            throw new Error("items is not an array");
        var html = getItemsFromStorage()
            .map(function (items) {
            return "\n        <div class=\"itemCard\">\n        <img src=\"" + items.img + "\">\n        <h3>Item Name: <br>" + items.name + "</h3>\n        <h3>items Description:</h3>\n        <p> " + items.desc + "</p>\n        <h3>Price:</h3>\n        <p>" + items.price + "</p>\n    </div>\n        ";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
