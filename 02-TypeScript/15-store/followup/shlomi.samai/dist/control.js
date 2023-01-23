function handleAddItem(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        items.push(new Item(name, price));
        console.log(items);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
