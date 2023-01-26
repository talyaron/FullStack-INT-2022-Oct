function handleAddItem(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var price = event.target.elements.price.value;
        var type = event.target.elements.type.value;
        var size = event.target.elements.size.value;
        var serial = event.target.elements.serial.value;
        products.push(new Product(name, price, type, size, serial));
        console.log(products);
        event.target.reset();
        console.log(name);
    }
    catch (error) {
        console.error(error);
    }
}
