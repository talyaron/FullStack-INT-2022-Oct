const store: HTMLHeadingElement | null = document.querySelector(".store");

function getItemsFromStorage(): Item[] | undefined {
  try {
    //get items from storage
    const itemsString = localStorage.getItem("clothesShopArr");
    if (!itemsString) throw new Error("Couldn't find items in storage");

    //convert to array
    const items = JSON.parse(itemsString);
    return items;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
