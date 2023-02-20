render(".test", getItems());
try {
    if (!form)
        throw new Error("Form not exists");
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        console.log(ev);
        var color = ev.target.elements.color.value;
        var name = ev.target.elements.name.value;
        var type = ev.target.elements.type.value;
        var price = ev.target.elements.price.value;
        var size = ev.target.elements.size.value;
        var img = ev.target.elements.img.value;
        var item = (new Product(name, type, price, size, color, img));
        console.log(item);
        addItems(item);
        render(".test", getItems());
        renderStore(".main", getItems());
        ev.target.reset();
    });
}
catch (error) {
    console.error(error);
}
