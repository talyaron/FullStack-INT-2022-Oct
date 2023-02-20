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
        console.log(items);
        ev.target.reset();
        console.log(name);
    }
    catch (error) {
        console.error(error);
    }
}
function handleChangerColor(ev) {
    try {
        console.log(ev);
        var color = ev.target.value;
        document.body.style.backgroundColor = color;
    }
    catch (error) {
        console.error(error);
    }
}
function handleViewPassword() {
    try {
        var passwordElement = document.querySelector("#pass");
        console.dir(passwordElement);
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
        }
    }
    catch (error) {
        console.error(error);
    }
}
