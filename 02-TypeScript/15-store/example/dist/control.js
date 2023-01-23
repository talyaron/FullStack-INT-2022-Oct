function handleAddItem(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var color = ev.target.elements.color.value;
        var price = ev.target.elements.price.valueAsNumber;
        var category = ev.target.elements.category.value;
        var size = ev.target.elements.size.valueAsNumber;
        var sn = ev.target.elements.sn.value;
        items.push(new Item(name, color, price, category, size, sn));
        console.log(items);
        console.log(name);
    }
    catch (error) {
        console.error(error);
    }
}
