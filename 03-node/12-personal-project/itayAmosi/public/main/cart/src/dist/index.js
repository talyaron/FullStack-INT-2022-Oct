function renderCartItems(products) {
    try {
        var html = "\n      <div class=\"shop-item\">\n      <img class=\"shop-item-image\" src=\"" + products.src + "\">\n      <div class=\"shop-item-details\">\n      <span class=\"shop-item-name\">green nails</span>\n      </div>\n      <span class=\"shop-item-price\">$12.99</span>\n      <button class=\"btn btn-primary shop-item-button\" type=\"button\">ADD TO CART</button>\n      <button id=\"delete\" class=\"btn delete btn-primary shop-item-button\" type=\"button\" onclick=\"handleDeleteProduct()\">DELETE</button>\n      </div>\n";
        var cartItemsRoot = document.querySelector("#cartItems");
        if (!cartItemsRoot)
            throw new Error("cartItemsRoot not found");
        cartItemsRoot.innerHTML += html;
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
//           throw new Error("student delete form HTML");
//         }
//         productId.remove();
//         return renderCartItems(products)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
// function handleDeleteProduct(_id: string) {
//   try {
//     console.log(_id);
//     fetch("/api/users/delete-user", {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ _id }),
//     })
//       .then((res) => res.json())
//       .then(({ products }) => {
//         renderProduct(products);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
// function addToFavourites(_id: Product) {
//   try {
//     fetch("/api/collections/add-favourites")
//       .then((res) => res.json())
//       .then(({ products }) => {
//         console.log(products);
//         if (!products) throw new Error("didnt find product");
//         const html = products.map((products) => {
//           return renderCartItems(products);
//         });
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
