var html = document.querySelector(".rootItems");
function handleArray(ev) {
    try {
        ev.preventDefault();
        var string = ev.target.elements.text.value;
        items.push(new item(string));
        ev.target.reset();
        return items;
    }
    catch (error) {
        console.error(error);
    }
}
console.log(items);
function renderArray(items) {
    try {
        html.innerHTML = "<h3>" + items + "</h3>";
    }
    catch (error) {
        console.error(error);
    }
}
function saveItems() {
    localStorage.setItem("items", JSON.stringify(items));
}
