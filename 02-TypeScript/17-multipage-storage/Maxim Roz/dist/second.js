var addToArray = document.querySelector("#input");
var addBtn = document.querySelector("form");
addBtn.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("function works");
    console.log(addToArray.value);
    items.push(addToArray.value);
    console.log(items);
    renderOnDom();
});
function renderOnDom() {
    var rootItems = document.querySelector("#rootItems");
    rootItems.textContent = items;
}
