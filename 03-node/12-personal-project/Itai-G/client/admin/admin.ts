

interface Product {
    name:string;
    descreption:string;
    price:number;
    imgUrl:string;
}

function handleAddProduct(ev: any) {
    try {
  
      const name = ev.target.elements.name.value;
      const descreption = ev.target.elements.descreption.value;
      const price = ev.target.elements.price.value;
      const imgUrl = ev.target.elements.imgUrl.value;
  
      if (!name) throw new Error("Please provide a name for the product");
      if (!descreption) throw new Error("Please provide a descreption for the product");
      if (!price) throw new Error("Please provide a price for the product");
      if (!imgUrl) throw new Error("Please provide an image URL for the product");
  
      const newProduct: Product = { name, descreption, price: Number(price), imgUrl };
  
      fetch("/api/products/create-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to create product");
          }
        })
        .then((product) => {
          console.log("Product created:", product);
        })
        .catch((error) => {
          console.error("Failed to create product:", error);
        });
    } catch (error: any) {
      console.error("Could not complete the add product:", error);
    }
  }