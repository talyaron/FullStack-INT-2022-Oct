interface Favourite {
  src: string;
  price: string;
  name: string;
  _id: string;
}

interface Product {
  _id: string;
  src: string;
  price: string;
  name: string;
  description: string;
}

function renderProduct(product:Product) {
  try {
    const html = `
      <div id="${product._id}" class="tour-row">
      <button class="tour-item tour-date"><img src="${product.src}"></button>
      <span class="tour-item tour-price">${product.price}$</span>
      <span class="tour-item tour-name">${product.name}</span>
      <span class="tour-item tour-descriptions">${product.description}</span>
      <button type="button" class="tour-item tour-btn btn btn-primary" onclick="handleAddToCart('${product._id}')">Add to Cart</button>
  </div>
`;
    const itemsRoot = document.querySelector("#items");
    if (!itemsRoot) throw new Error("itemsRoot not found");
    itemsRoot.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}
function handleGetProduct() {
  try {
    
    fetch("/api/collections/get-products")
      .then((res) => res.json())
      .then(({ products }) => {
        if (!products) throw new Error("didnt found product");
        const html = products
        .map((product) => {
          return   renderProduct(product);
        })
      
      });
  } catch (error) {
    console.error(error);
  }
}

function handleAddToCart(_id:string) {
  try {
    const currentLocalStorageUser = localStorage.getItem("currentUser"); //cookies
    if(!currentLocalStorageUser){
      window.location.href = "/login/index.html";
      return
    }
    const currentUser = JSON.parse(currentLocalStorageUser)
    fetch(
      "/api/cart/add-cart?" +
        new URLSearchParams({ _id, userId:currentUser._id }).toString(),
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        const productId = document.getElementById(_id);
        if (!productId) {
          throw new Error("productId not found");
        }
        console.log(productId);
        // return renderCartItems(product)
      })

      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}
// appointment
// function renderProduct(products:Product) {
//   try {
//     const html = `
//       <div class="tour-row">
//       <button class="tour-item tour-date"><img src="${products.src}"></button>
//       <span class="tour-item tour-price">${products.price}$</span>
//       <span class="tour-item tour-name">${products.name}</span>
//       <span class="tour-item tour-descriptions">${products.description}</span>
//       <button type="button" class="tour-item tour-btn btn btn-primary" onclick="handleAddToFavourites(event)">Add to Favourites</button>
//   </div>
// `;
//     const itemsRoot = document.querySelector("#items");
//     if (!itemsRoot) throw new Error("itemsRoot not found");
//     itemsRoot.innerHTML += html;
//   } catch (error) {
//     console.error(error);
//   }
// }





