const _items = getItemsFromStorage();
// items = _items;

if (_items) {
  clothesShopArr.push(..._items);
}

if (store) {
  store.innerHTML = showStore(clothesShopArr);
}
