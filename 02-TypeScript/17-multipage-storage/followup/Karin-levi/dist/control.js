function handleAddItem(ev) {
    try {
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, price, category, sn));
        localStorage.setItem('items', JSON.stringify(items));
        ev.target.reset();
        console.log(name);
        if (!rootItems)
            throw new Error("rootItems is null");
        renderItems(items, "rootItems");
    }
    catch (error) {
        console.error(error);
    }
}
