render(".test", getItems());
try {
    if (!form)
        throw new Error("Form not exists");
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        console.log(ev);
        var name = ev.target.elements.name.value;
        var type = ev.target.elements.type.value;
        var price = ev.target.elements.price.value;
        var size = ev.target.elements.size.value;
        var img = ev.target.elements.img.value;
        var items = [];
        items.push(new Product(name, type, price, size, img));
        console.log(items);
        addItems(items);
        render(".test", getItems());
        renderStore(".main", getItems());
        ev.target.reset();
    });
}
catch (error) {
    console.error(error);
}
