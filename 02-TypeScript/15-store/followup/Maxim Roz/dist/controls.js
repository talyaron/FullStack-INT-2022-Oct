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
        var email = ev.target.elements.email.value;
        items.push(new Item(name, color, price, category, size, sn, email));
        console.log(items);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
