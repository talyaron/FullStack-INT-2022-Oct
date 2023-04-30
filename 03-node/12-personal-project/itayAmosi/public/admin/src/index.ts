import { Collections } from "../../../API/item/collectionsModel"

function handleAddCollections(ev: any) {
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
      const newCollections: any = { name, src, price, description };
      //send to server:
      fetch("/api/collections/add-collections", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCollections),
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


//   function handleGetCollections() {
//     try {
//       fetch("/api/collections/get-collections")
//         .then((res) => res.json())
//         .then(({ collections }) => {
//           try {
//             if (!collections) throw new Error("didnt find collections");

//             // renderCollections(collections);
//           } catch (error) {
//             console.error(error);
//           }
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   }