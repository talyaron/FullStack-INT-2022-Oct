// import { Collection } from "../../../API/item/collectionsModel"
function handleAddProducts(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var src = ev.target.elements.src.value;
        var price = ev.target.elements.price.value;
        var description = ev.target.elements.description.value;
        if (!name)
            throw new Error("No name");
        if (!src)
            throw new Error("No src");
        if (!price)
            throw new Error("No price");
        if (!description)
            throw new Error("No description");
        var newProducts = { name: name, src: src, price: price, description: description };
        fetch("/api/collections/add-products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProducts)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            var form = document.getElementById("addNewProduct");
            form.reset();
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
