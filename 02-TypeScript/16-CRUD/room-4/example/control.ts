const form = document.querySelector("#theForm");

function handleAddItem(ev: any) {
  try {
    ev.preventDefault();

    console.log(ev);

    const name = ev.target.elements.name.value;
    const color = ev.target.elements.color.value;
    const price = ev.target.elements.price.valueAsNumber;
    const category = ev.target.elements.category.value;
    const size = ev.target.elements.size.valueAsNumber;
    const sn = ev.target.elements.sn.value;

    items.push(new Item(name, color, price, category, size, sn));
    console.log(items);
    ev.target.reset();

    console.log(name);
    if (!itemsRoot) throw new Error("itemsRoot is null");

    itemsRoot.innerHTML = renderItems(items);
  } catch (error) {
    console.error(error);
  }
}

function handleChangerColor(ev) {
  try {
    console.log(ev);
    const color = ev.target.value;
    document.body.style.backgroundColor = color;
  } catch (error) {
    console.error(error);
  }
}

function handleViewPassword() {
  try {
    const passwordElement: any = document.querySelector("#pass");
    console.dir(passwordElement);
    if (passwordElement.type === "password") {
      passwordElement.type = "text";
    } else {
      passwordElement.type = "password";
    }
  } catch (error) {
    console.error(error);
  }
}

function renderItems(items: Item[]): string {
  try {
    if (!items || !Array.isArray(items))
      throw new Error("items is not an array");

    const html = items
      .map((item) => {
        console.log(`---${item.uid}---`);
        return `
    <div class="item" style="background-color:${item.color}">
      <h3>${item.name}</h3>
      <div>Price: ${item.price} <button onclick="handleUpdateItem('${item.uid}')">Update</button></div>
      <div>Category: ${item.category}</div>
      <div>Size: ${item.size}</div>
      <div>S/N: ${item.sn}</div>
      <button onclick="handleDeleteItem('${item.uid}')">Remove</button>
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

function handleDeleteItem(uid: string) {
  try {
    console.log(uid);
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("item not found");
    items.splice(index, 1);

    if (!itemsRoot) throw new Error("ItemRoot is undefined");
    itemsRoot.innerHTML = renderItems(items);
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateItem(uid: string) {
  try {
    let newPrice;
    newPrice= prompt ("Enter a new price to this item:");
    while(!newPrice || isNaN(newPrice)){
      newPrice= prompt ("You need to enter a number:");
      newPrice=parseInt(newPrice);
    }
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("item not found");
    if (newPrice)
    items[index].price= newPrice;

    if (!itemsRoot) throw new Error("ItemRoot is undefined");
    itemsRoot.innerHTML = renderItems(items);
  } catch (error) {
    console.error(error);
  }
}

