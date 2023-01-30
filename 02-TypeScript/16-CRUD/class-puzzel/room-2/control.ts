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
        const itemUID = item.uid;
        console.log(`---${itemUID}---`);
        return `
      <div class="item" style="background-color:${item.color}">
        <h3>${item.name}</h3>
        <div>Price: ${item.price}</div>
        <button onclick="handleUpdatePrice('${itemUID}')">Update</button>
        <div>Category: ${item.category}</div>
        <div>Size: ${item.size}</div>
        <div>S/N: ${item.sn}</div>
        <button onclick="handleDeleteItem('${itemUID}')">Remove</button>
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

function handleUpdatePrice(uid: string) {
  try {
    const index = items.findIndex((item) => item.uid === uid);
    console.log(index);
    if (index === -1) throw new Error("item not found");
    const newPrice = prompt("Enter new price");
    console.log(newPrice);
    if (!newPrice || Number.isNaN(newPrice))
      throw new Error("Please enter price!!!");
    items[index].price = parseInt(newPrice);
    itemsRoot!.innerHTML = renderItems(items);
  } catch (error) {
    console.log(error);
  }
}
