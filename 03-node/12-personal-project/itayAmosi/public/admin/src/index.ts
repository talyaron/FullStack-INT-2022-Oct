// import { Collection } from "../../../API/item/collectionsModel"

function handleAddProducts(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const src = ev.target.elements.src.value;
      const price = ev.target.elements.price.value;
      const description = ev.target.elements.description.value;
      if (!name) throw new Error("No name");
      if (!src) throw new Error("No src");
      if (!price) throw new Error("No price");
      if (!description) throw new Error("No description");
      const newProducts: any = { name, src, price, description };
      console.log(newProducts);
      fetch("/api/collections/add-products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProducts),
      })
        .then((res) => res.json())
        .then((data) => {
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }