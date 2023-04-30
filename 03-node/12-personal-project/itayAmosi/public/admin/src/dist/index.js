// import { Collection } from "../../../API/item/collectionsModel"
function handleAddCollections(ev) {
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
        var newCollections = { name: name, src: src, price: price, description: description };
        //send to server:
        fetch("/api/collections/add-collections", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCollections)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
