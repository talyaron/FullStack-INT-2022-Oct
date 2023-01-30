var _items = getItemsFromStorage();
renderItems(items, "rootItems");
handleSaveItems();
console.log(items);
if (_items) {
    items.push.apply(items, _items);
}
