interface IShopItem {
  name: string;
  candyType: string;
  price: number;
  id: string;
}
let uniqueId =
  Date.now().toString(36) + Math.random().toString(36).substring(2);

const shopItems: IShopItem[] = [];

const addItem = (item) => {
  try {
    item?.preventDefault();

    const name = item.target.elements.name.value;
    const candyType = item.target.elements.candyType.value;
    const price = item.target.elements.price.value;
    const id = uniqueId;
    const newItem: IShopItem = { name, candyType, price, id };
    shopItems.push(newItem);
    item.target.reset();

    if (!itemsRoot) throw new Error("error");
    itemsRoot.innerHTML = renderItems(shopItems);
  } catch (error) {
    console.error(error);
  }
};

const itemsRoot = document.getElementById("itemsRoot");

function renderItems(item: IShopItem[]): string {
  try {
    if (!item || !Array.isArray(item)) throw new Error("items is not an array");

    const html = item
      .map((item) => {
        return `
        <div class="item">
          <h3>${item.name}</h3>
          <div>Price: ${item.price} <button id="${item.id}" onclick="newPrice('${item.id}')">Update</button>
          <form onsubmit="handleUpdatedPrice()" class="newPrice" style="display: none" id="update-price-${item.id}" >
          <input type="number" name="newPrice" placeholder="new price" required />
          <input type="submit" value="update price">
          </form>
          <div>Category: ${item.candyType}</div>
          <button onclick="handleDeleteItem('${item.id}')">Remove</button>
        </div>
        `;
      })
      .join(" ");
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function newPrice(id: string) {
  const item = document.getElementById(`${id}`);

  if (item) item.style.display = "none";
  const formUpdate = document.getElementById(`update-price-${id}`);

  formUpdate &&  document.body.appendChild(formUpdate)

  if (formUpdate) formUpdate.style.display = "block";
}

function handleUpdatedPrice(item) {
  try {
    console.log(item);
    // const formUpdate = document.getElementById(`update-price-${id}`);
    // const html = document.getElementById(`${id}`);
    // console.log(html)
    // if (formUpdate) html?.appendChild(formUpdate);
    // item?.preventDefault();
    if (!itemsRoot) throw new Error("ItemRoot is undefined");
    itemsRoot.innerHTML = renderItems(shopItems);
  } catch (error) {
    console.log(error);
  }
}

function handleDeleteItem(id: string) {
  try {
    const index = shopItems.findIndex((item) => item.id === id);
    shopItems.splice(index, 1);

    if (!itemsRoot) throw new Error("ItemRoot is undefined");
    itemsRoot.innerHTML = renderItems(shopItems);
  } catch (error) {
    console.error(error);
  }
}
