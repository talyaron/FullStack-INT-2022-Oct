function handleAddProduct(ev) {
    try {
        var name = ev.target.elements.name.value;
        var descreption = ev.target.elements.descreption.value;
        var price = ev.target.elements.price.value;
        var imgUrl = ev.target.elements.imgUrl.value;
        if (!name)
            throw new Error("Please provide a name for the product");
        if (!descreption)
            throw new Error("Please provide a descreption for the product");
        if (!price)
            throw new Error("Please provide a price for the product");
        if (!imgUrl)
            throw new Error("Please provide an image URL for the product");
        var newProduct = { name: name, descreption: descreption, price: Number(price), imgUrl: imgUrl };
        fetch("/api/products/create-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Failed to create product");
            }
        })
            .then(function (product) {
            console.log("Product created:", product);
        })["catch"](function (error) {
            console.error("Failed to create product:", error);
        });
    }
    catch (error) {
        console.error("Could not complete the add product:", error);
    }
}
