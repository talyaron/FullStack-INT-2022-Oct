

interface Product {
  _id: string;
  src: string;
  price: string;
  name: string;
  description: string;
}

function renderProduct(products:Product) {
  try {
    const html = `
      <div class="tour-row">
      <button class="tour-item tour-date"><img src="${products.src}"></button>
      <span class="tour-item tour-price">${products.price}$</span>
      <span class="tour-item tour-name">${products.name}</span>
      <span class="tour-item tour-descriptions">${products.description}</span>
      <button type="button" class="tour-item tour-btn btn btn-primary" onclick="handleAddToFavourites("${products._id}")">Add to Favourites</button>
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
        if (!products) throw new Error("didnt find product");
        const html = products
        .map((products) => {
          return   renderProduct(products);
        })
      
      });
  } catch (error) {
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





