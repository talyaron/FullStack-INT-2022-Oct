interface Product {
  src: string;
  price: string;
  name: string;
  descriptions: string;
}

function renderProduct(products: Array<Product>) {
  try {
    const html = `
      <div class="tour-row">
      <button class="tour-item tour-date"><img src="${products.src}"></button>
      <span class="tour-item tour-price">${products.price}</span>
      <span class="tour-item tour-name">${products.name}</span>
      <span class="tour-item tour-descriptions">${products.descriptions}</span>
      <button type="button" class="tour-item tour-btn btn btn-primary">Add to Favourites</button>
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
        console.log(products);
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
