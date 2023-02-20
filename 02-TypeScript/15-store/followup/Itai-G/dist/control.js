function handelAddItem(e) {
    try {
        e.preventDefault();
        var name = e.target.elements.name.value;
        var color = e.target.elements.color.value;
        var price = e.target.elements.price.value;
        var category = e.target.elements.category.value;
        var size = e.target.elements.size.value;
        var sn = e.target.elements.sn.value;
        items.push(new Item(name, color, price, category, size, sn));
        console.log(items);
        e.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
