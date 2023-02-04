function handleAddItem (ev: any) {
    try {
        ev.preventDefault();

        debugger
        const name = ev.target.elements.name.value;
        const price = ev.target.elements.price.valueAsNumber;
        const imgLink = ev.target.elements.imgLink.value;
        const serialNumber = ev.target.elements.serialNumber.value;

        products.push(new Product(name, price, imgLink, serialNumber));
        ev.target.reset();

        if (!productRoot) throw new Error("productRoot is null")

        productRoot.innerHTML = renderProducts(products);        
    } catch (error) {
        console.error(error);
    }
}



function renderProducts(products: Product[]): string {
    try {
      if (!products || !Array.isArray(products))
        throw new Error("products is not an array");
  
      const html = products
        .map((product) => {
          return `
      <div class="product">
        <h3>${product.name}</h3>
        <div>Price: ${product.price} <button onclick="handleUpdatePrice()">Update</button></div>
        <div>Img link: ${product.imgLink}</div>
        <div>Serial number: ${product.serialNumber}</div>
        <button onclick="handleDeleteItem('${product.serialNumber}')">Remove</button>
      </div>
      `;
        })
        .join(" ");
      console.log(html);
      return html;
    } catch (error) {
      console.error(error);
      return "";
    }

  }


  function handleDeleteProduct(serialNumber: string) {
    try {
      const index = products.findIndex((product) => product.serialNumber === serialNumber);
      if (index === -1) throw new Error("product is not found");
      products.splice(index, 1);
  
      if (!productRoot) throw new Error("productRoot is undefined");
      productRoot.innerHTML = renderProducts(products);
    } catch (error) {
      console.error(error);
    }
  }