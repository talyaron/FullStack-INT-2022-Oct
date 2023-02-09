renderItems(items, "rootItems");
var _items = getItemsFromStorage();
handleSaveItems();
console.log(items);
if (_items) {
    items.push.apply(items, _items);
}
