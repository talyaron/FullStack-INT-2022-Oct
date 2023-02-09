const itemsRoot = document.querySelector('#itemsRoot');

function getItemsFromStorage():Item[] | undefined {
  try {
    //get items from storage
    const itemsString = localStorage.getItem("items");
    if (!itemsString) throw new Error("Couldn't find items in storage");

    //convert to array
    const items = JSON.parse(itemsString);
    return items;
    console.log(items);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
