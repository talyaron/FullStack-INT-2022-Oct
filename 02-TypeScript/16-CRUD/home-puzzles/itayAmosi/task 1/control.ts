const form = document.querySelector("#theForm");

function handleAddItem(ev: any) {
  try {
    ev.preventDefault();

    console.log(ev);

    const name = ev.target.elements.name.value;
    const color = ev.target.elements.color.value;
    const price = ev.target.elements.price.valueAsNumber;
    const category = ev.target.elements.category.value;
    const sn = ev.target.elements.sn.value;
    const img = ev.target.elements.img.value;

    items.push(new Item(name, color, price, category, sn, img));
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
      <h3>${item.name} <button onclick="newName('${item.uid}')">Update</button></h3>
      <div>Price: ${item.price} <button onclick="newPrice('${item.uid}')">Update</button></div>
      <div>Category: ${item.category}  <button onclick="newCategory('${item.uid}')">Update</button></div>
      <div>S/N: ${item.sn} <button onclick="newSN('${item.uid}')">Update</button></div>
      <button onclick="handleDeleteItem('${item.uid}')">Remove</button>
      <img src='${item.img}'/>
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

function newPrice(uid: string) {
  try {
    const priceUpdate = prompt("add new price") as string;
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("items not found");
    if (items[index].price) {
      items[index].price = parseInt(priceUpdate);
      if (!itemsRoot) throw new Error("ItemRoot is undefined");
      itemsRoot.innerHTML = renderItems(items);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
function newSN(uid: string) {
  try {
    const priceUpdate = prompt("add new SN") as string;
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("items not found");
    if (items[index].sn) {
      items[index].sn = priceUpdate;
      if (!itemsRoot) throw new Error("ItemRoot is undefined");
      itemsRoot.innerHTML = renderItems(items);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
function newCategory(uid: string) {
  try {
    const priceUpdate = prompt("add new Category") as string;
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("items not found");
    if (items[index].category) {
      items[index].category = priceUpdate;
      if (!itemsRoot) throw new Error("ItemRoot is undefined");
      itemsRoot.innerHTML = renderItems(items);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
function newName(uid: string) {
  try {
    const priceUpdate = prompt("add new Name") as string;
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("items not found");
    if (items[index].name) {
      items[index].name = priceUpdate;
      if (!itemsRoot) throw new Error("ItemRoot is undefined");
      itemsRoot.innerHTML = renderItems(items);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
