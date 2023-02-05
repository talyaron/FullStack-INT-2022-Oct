console.log("renderItems");
const _items = getItemsFromStorage();

if (_items) {
    items.push(..._items);
}

renderItems(items, "itemsRoot");
console.log(items);
