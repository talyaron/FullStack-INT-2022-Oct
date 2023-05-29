 interface Cart {
    userId: string;
    productIds: string[];
    _id: string;
  }

  interface Product {
    name:string;
    descreption:string;
    price:number;
    imgUrl:string;
}



function renderCartItem(product: Product) {
    try {
      const html = `
        <div class="cartItem" id="${product._id}">
          <img src="${product.imgUrl}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.descreption}</p>
          <p>$${product.price}</p>
          <input type="number" id="quantityInput${product._id}" value="1" min="1">
          <button id="removeBtn${product._id}" class="removeBtn" onclick="removeItemsFromCart('${product._id}')">Remove</button>
        </div>
      `;
      const containerRoot = document.querySelector("#cartContainer");
      if (!containerRoot) throw new Error("containerRoot not found");
      containerRoot.innerHTML += html;
    } catch (error) {
      console.error(error);
    }
  }


  function renderCartItems(cart: Cart, products: Product[]) {
    try {
      const cartProducts = products.filter((product) => cart.productIds.includes(product._id));
      if (cartProducts.length === 0) {
        const html = `
          <p>Your cart is empty</p>
        `;
        const containerRoot = document.querySelector("#cartContainer");
        if (!containerRoot) throw new Error("containerRoot not found");
        containerRoot.innerHTML += html;
      } else {
        cartProducts.forEach((product) => {
          renderCartItem(product);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function getCart() {
    try {
      const currentLocalStorageUser = localStorage.getItem("currentUser");
      if (!currentLocalStorageUser) {
        window.location.href = "/login/login.html";
        return;
      }
      const currentUser = JSON.parse(currentLocalStorageUser);
      fetch(`/api/cart/get-cart?userId=${currentUser._id}`)
        .then((res) => res.json())
        .then(({ cart }) => {
          if (!cart) throw new Error("Cart not found");
          fetch("/api/products/get-products")
            .then((res) => res.json())
            .then(({ products }) => {
              if (!products) throw new Error("Products not found");
              renderCartItems(cart, products);
            });
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  getCart();


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
        const product = document.getElementById(productId);
        console.log(product)
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
  
  function confirmOrder() {
    try {
      const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
      if (!currentLocalStorageUser) {
        window.location.href = "/login/login.html";
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
      alert("Thank you for your purchase");
      window.location.href = "/main/main.html";
        
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}