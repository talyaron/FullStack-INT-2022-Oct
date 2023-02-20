var uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
var shopItems = [];
var addItem = function (item) {
    try {
        item === null || item === void 0 ? void 0 : item.preventDefault();
        var name = item.target.elements.name.value;
        var candyType = item.target.elements.candyType.value;
        var price = item.target.elements.price.value;
        var id = uniqueId;
        var newItem = { name: name, candyType: candyType, price: price, id: id };
        shopItems.push(newItem);
        item.target.reset();
        if (!itemsRoot)
            throw new Error("error");
        itemsRoot.innerHTML = renderItems(shopItems);
    }
    catch (error) {
        console.error(error);
    }
};
var itemsRoot = document.getElementById("itemsRoot");
function renderItems(item) {
    try {
        if (!item || !Array.isArray(item))
            throw new Error("items is not an array");
        var html = item
            .map(function (item) {
            return "\n        <div class=\"item\">\n          <h3>" + item.name + "</h3>\n          <div>Price: " + item.price + " <button id=\"" + item.id + "\" onclick=\"newPrice('" + item.id + "')\">Update</button>\n          <form onsubmit=\"handleUpdatedPrice()\" class=\"newPrice\" style=\"display: none\" id=\"update-price-" + item.id + "\" >\n          <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" required />\n          <input type=\"submit\" value=\"update price\">\n          </form>\n          <div>Category: " + item.candyType + "</div>\n          <button onclick=\"handleDeleteItem('" + item.id + "')\">Remove</button>\n        </div>\n        ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function newPrice(id) {
    var item = document.getElementById("" + id);
    if (item)
        item.style.display = "none";
    var formUpdate = document.getElementById("update-price-" + id);
    formUpdate && document.body.appendChild(formUpdate);
    if (formUpdate)
        formUpdate.style.display = "block";
}
function handleUpdatedPrice(item) {
    try {
        console.log(item);
        // const formUpdate = document.getElementById(`update-price-${id}`);
        // const html = document.getElementById(`${id}`);
        // console.log(html)
        // if (formUpdate) html?.appendChild(formUpdate);
        // item?.preventDefault();
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
        itemsRoot.innerHTML = renderItems(shopItems);
    }
    catch (error) {
        console.log(error);
    }
}
function handleDeleteItem(id) {
    try {
        var index = shopItems.findIndex(function (item) { return item.id === id; });
        shopItems.splice(index, 1);
        if (!itemsRoot)
            throw new Error("ItemRoot is undefined");
        itemsRoot.innerHTML = renderItems(shopItems);
    }
    catch (error) {
        console.error(error);
    }
}
