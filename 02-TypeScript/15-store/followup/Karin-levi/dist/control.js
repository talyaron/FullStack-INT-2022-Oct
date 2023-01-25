function handleAddItem(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var shape = ev.target.elements.color.value;
        var color = ev.target.elements.price.value;
        var price = ev.target.elements.category.valueAsNumber;
        var serialNumber = ev.target.elements.size.valueAsNumber;
        items.push(new Item(name, shape, color, price, serialNumber));
        console.log(items);
        ev.target.reset();
        console.log(name);
    }
    catch (error) {
        console.error(error);
    }
}
