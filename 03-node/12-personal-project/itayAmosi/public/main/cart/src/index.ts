enum CartStatus{
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

function renderCartItems(cart: Array<Cart>) {
  try {
    const html = `
    <div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${cart}" height="100">
        <span class="cart-item-title">Album 3</span>
    </div>
    <span class="cart-price cart-column">$9.99</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
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
    if(!currentLocalStorageUser){
      window.location.href = "/login/index.html";
      return
    }
    const currentUser = JSON.parse(currentLocalStorageUser)
    fetch(
      "/api/cart/get-cart?" +
        new URLSearchParams({ userId:currentUser._id }).toString(),
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.json())
    .then(({cart}) => {
      console.log(cart);
      const html = cart
      .map((cart) => {
        return renderCartItems(cart)

      })
    })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}




function GetCartItems() {
  try {
    const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
    if(!currentLocalStorageUser){
      window.location.href = "/login/index.html";
      return
    }
    const currentUser = JSON.parse(currentLocalStorageUser)
    fetch(
      "/api/cart/get-products-by-id?" +
        new URLSearchParams({ userId:currentUser._id }).toString(),
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
      console.log(data);
    })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
