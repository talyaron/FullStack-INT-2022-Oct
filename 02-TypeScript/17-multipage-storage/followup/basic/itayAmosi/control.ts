const form = document.querySelector("#theForm");

function handleAddItem(event: any) {
  try {
    event.preventDefault();

    console.log(event);

    const name = event.target.elements.name.value;
    const color = event.target.elements.color.value;
    const price = event.target.elements.price.valueAsNumber;
    const category = event.target.elements.category.value;
    const sn = event.target.elements.sn.value;
    const img = event.target.elements.img.value;

    items.push(new Item(name, color, price, category, sn, img));
    console.log(items);
    event.target.reset();

    console.log(name);
    if (!itemsRoot) throw new Error("itemsRoot is null");
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


function handleDeleteItem(uid: string) {
  try {
    console.log(uid);
    const index = items.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("item not found");
    items.splice(index, 1);

    if (!itemsRoot) throw new Error("ItemRoot is undefined");

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
    }
    
  } catch (error) {
    console.error(error);
    return false;
  }
}
function handleSaveItems(){
  console.log('save items');
  localStorage.setItem('items',JSON.stringify(items));
}

function renderItems(items: Item[], renderElementId: string): void {
  try {
    if (!items || !Array.isArray(items))
      throw new Error("items is not an array");

    const html = items
      .map((item) => {
        console.log(`---${item.uid}---`);
        return   ` <div class="item" style="background-color:${item.color}">
        <h3>${item.name}</h3>
        <div>Price: ${item.price} <button onclick="handleUpdatePrice()">Update</button></div>
        <div>Category: ${item.category}</div>
        <div>Size: ${item.color}</div>
        <div>S/N: ${item.sn}</div>
        <button onclick="handleDeleteItem('${item.uid}')">Remove</button>
      </div>
      `;
      })
      .join(" ");
    console.log(html);
    const element = document.querySelector(`#${renderElementId}`);
    if (!element) throw new Error("Couldnt find element in the DOM");
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

