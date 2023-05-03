enum CartStatus {
  Open = "open",
  Closed = "closed",
}

interface Cart {
  userId: string;
  productIds: string[];
  _id: string;
  status: CartStatus;
}

interface Product {
  _id: string;
  src: string;
  price: string;
  name: string;
  description: string;
}

function renderCartItems(product: Product) {
  try {
    const html = `
    <div id="${product._id}" class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${product.src}" height="100">
        <span class="cart-item-title">${product.name}</span>
    </div>
    <span class="cart-price cart-column">${product.price}$</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button" onclick="removeItemsFromCart('${product._id}')">REMOVE</button>
    </div>
</div>
`;
    const cartItemsRoot = document.querySelector("#cartItems");
    if (!cartItemsRoot) throw new Error("cartItemsRoot not found");
    cartItemsRoot.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}

function handleGetCart() {
  try {
    const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
    if (!currentLocalStorageUser) {
      window.location.href = "/login/index.html";
      return;
    }
    const currentUser = JSON.parse(currentLocalStorageUser);
    fetch(
      "/api/cart/get-cart?" +
        new URLSearchParams({ userId: currentUser._id }).toString(),
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(({ cart }) => {
        GetCartItems(cart.productIds).then((products) => {
          products.forEach((product) => {
            renderCartItems(product);
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function GetCartItems(productIds: string[]): any {
  try {
    return fetch(
      "/api/collections/get-products-by-id?" +
        new URLSearchParams({ productIds: productIds.join(",") }).toString(),
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.products;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function removeItemsFromCart(productId:string) {
  try {
    const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
    if (!currentLocalStorageUser) {
      window.location.href = "/login/index.html";
      return;
    }
    const currentUser = JSON.parse(currentLocalStorageUser);
    return fetch(
      "/api/cart/remove-item-from-cart?" +
        new URLSearchParams({ userId: currentUser._id, productId  }).toString(),
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log("hiii");
      const product = document.getElementById(productId);

        if (!product) {
          throw new Error("product delete form HTML");
        }
        product.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}


function handelPurchase() {
    try {
      const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
      if (!currentLocalStorageUser) {
        window.location.href = "/login/index.html";
        return;
      }
      const currentUser = JSON.parse(currentLocalStorageUser);
    return fetch(
      "/api/cart/add-purchase?" +
        new URLSearchParams({ userId: currentUser._id }).toString(),
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Thank you for purchasing the receipt that will be sent to your email, The products are on their way to you");
      window.location.href = "/main/index.html";
        
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}