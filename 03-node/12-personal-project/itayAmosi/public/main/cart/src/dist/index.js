// import { renderProduct } from "../../collections/src/view";
function renderCartItems() {
    try {
        var html = "\n      <div class=\"shop-item\">\n          <img class=\"shop-item-image\" src=\"https://i.pinimg.com/originals/91/56/eb/9156ebee25665f298c941cdfbaa1a592.jpg\">\n          <div class=\"shop-item-details\">\n              <span class=\"shop-item-price\">$12.99</span>\n              <button class=\"btn btn-primary shop-item-button\" type=\"button\">ADD TO CART</button>\n              <button id=\"delete\" class=\"btn delete btn-primary shop-item-button\" type=\"button\" onclick=\"handleDeleteProduct()\">DELETE</button>\n          </div>\n      </div>\n";
        var cartItemsRoot = document.querySelector("#cartItems");
        if (!cartItemsRoot)
            throw new Error("cartItemsRoot not found");
        cartItemsRoot.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
// function handleDeleteStudent(_id: string) {
//   try {
//     fetch(
//       "/api/collections/delete-product?" + new URLSearchParams({ _id }).toString(),
//       {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then(() => {
//         const studentForm = document.getElementById(_id);
//         if (!studentForm) {
//           throw new Error("student delete form HTML");
//         }
//         studentForm.remove();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }
function handleDeleteProduct(_id) {
    try {
        console.log(_id);
        fetch("/api/users/delete-user", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var products = _a.products;
            renderProduct(products);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
