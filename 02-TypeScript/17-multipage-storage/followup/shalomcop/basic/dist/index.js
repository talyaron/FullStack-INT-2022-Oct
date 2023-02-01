var _items = getItemsFromStorage();
if (_items) {
    items.push.apply(items, _items);
}
renderItems(items, "rootItems");
