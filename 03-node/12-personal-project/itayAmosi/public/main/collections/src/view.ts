// import {Collection} from "../../../../API/collection/collectionsModel";

export interface Collection {
  src: string;
  price: string;
  name: string;
  descriptions: string;
}


export function renderCollection(collections:Collection) {
  try {
    const html = `
      <div class="tour-row">
      <button class="tour-item tour-date"><img src="${collections.src}"></button>
      <span class="tour-item tour-price">${collections.price}</span>
      <span class="tour-item tour-name">${collections.name}</span>
      <span class="tour-item tour-descriptions">${collections.descriptions}</span>
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

export function handleGetCollections() {
  try {
    fetch("/api/collections/get-collections")
      .then((res) => res.json())
      .then(({ collections }) => {
        // if (!collections) throw new Error("didnt find collections");
        renderCollection(collections);
      });
  } catch (error) {
    console.error(error);
  }
}
