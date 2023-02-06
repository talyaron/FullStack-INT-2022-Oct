const _items = getItemsFromStorage();

if (_items) {
    items.push(..._items);
}

renderItems(items, "itemsRoot");
handleSaveItems()