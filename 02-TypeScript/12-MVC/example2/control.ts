function getProductFromUser(): void {
  try {
    const name = prompt("what is the name of the product?");
    const _price = prompt("What is the price of the produc?");
    const imageUrl = prompt("Product image url");
    const date = new Date().getTime();
    if (!name || !_price || !imageUrl) throw new Error("Some data is missing");

    const price = parseInt(_price);
    if (typeof price !== "number") throw new Error("price is not a number");
    products.push(new Product(imageUrl, name, price, date));
  } catch (error) {
    console.error(error);
  }
}

function renderProducts(products: Product[],someElement: Element | null): void {
  try {
    if (!someElement)
      throw new Error("no dom element to render the products to");
    let html = "";

    products.forEach((product) => {
      html += `<div class="card">
                <img src="${product.imgUrl}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}$</p>
                </div>`;
    });
    console.log(html);

    someElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function sortProducts(products: Product[], sortBy: "date" | "price") {
  try {
    const _products = products.sort((a, b) => a[sortBy] - b[sortBy]);
    return _products;
  } catch (error) {
    console.error(error);
    return products;
  }
}
