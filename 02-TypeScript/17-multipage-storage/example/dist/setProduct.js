console.log("renderItems");
var _items = getItemsFromStorage();
// items = _items;
if (_items) {
    items.push.apply(items, _items);
}
renderItems(items, "itemsRoot");
console.log(items);
