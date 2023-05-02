function renderProduct(products) {
    try {
        var html = "\n      <div class=\"tour-row\">\n      <button class=\"tour-item tour-date\"><img src=\"" + products.src + "\"></button>\n      <span class=\"tour-item tour-price\">" + products.price + "$</span>\n      <span class=\"tour-item tour-name\">" + products.name + "</span>\n      <span class=\"tour-item tour-descriptions\">" + products.description + "</span>\n      <button type=\"button\" class=\"tour-item tour-btn btn btn-primary\" onclick=\"handleAddToFavourites(\"" + products._id + "\")\">Add to Favourites</button>\n  </div>\n";
        var itemsRoot = document.querySelector("#items");
        if (!itemsRoot)
            throw new Error("itemsRoot not found");
        itemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetProduct() {
    try {
        fetch("/api/collections/get-products")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var products = _a.products;
            if (!products)
                throw new Error("didnt find product");
            var html = products
                .map(function (products) {
                return renderProduct(products);
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
// function handleAddToFavourites(_id: string, products) {
//   try {
//     fetch(
//       "/api/favourites/add-favourite?" +
//         new URLSearchParams({ _id }).toString(),
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then(() => {
//         const productId = document.getElementById(_id);
//         if (!productId) {
//           throw new Error("productId not fond");
//         }
//         return renderCartItems(products)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
