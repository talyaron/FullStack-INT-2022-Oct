renderItems(items, "rootItems");
const _items = getItemsFromStorage();
handleSaveItems();
console.log(items);


if (_items) {
    items.push(..._items);
}