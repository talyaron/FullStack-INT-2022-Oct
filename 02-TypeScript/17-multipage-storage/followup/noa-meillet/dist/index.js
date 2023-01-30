var _items = getItemsFromStorage();
// items = _items;
if (_items) {
    clothesShopArr.push.apply(clothesShopArr, _items);
}
if (store) {
    store.innerHTML = showStore(clothesShopArr);
}
