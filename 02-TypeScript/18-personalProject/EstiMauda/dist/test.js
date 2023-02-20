var form = document.querySelector("#theForm");
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var size = ev.target.elements.size.valueAsNumber;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, color, price, category, size, sn));
        // localStorage.setItem('items',JSON.stringify(items));
        console.log(items);
        ev.target.reset();
        console.log(name);
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
        renderItems(items, "itemsRoot");
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveItems() {
    console.log('save items');
    localStorage.setItem('items', JSON.stringify(items));
}
