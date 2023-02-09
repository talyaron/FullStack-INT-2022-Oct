function showStore(clothesShopArr: Item[]): string {
  try {
    if (store && clothesShopArr.length != 0) {
      let html = ``;
      for (let i = 0; i < clothesShopArr.length; i++) {
        html += `<div class= "store__item">
          <img class="store__item__detail" id="image" src='${clothesShopArr[i].image}' alt="image"/>
          <h2 class="store__item__detail" id="itemName">${clothesShopArr[i].name}</h2>
          <h5 class="store__item__detail" id="itemDepartment">${clothesShopArr[i].department}</h5>
          <h5 class="store__item__detail" id="itemType">${clothesShopArr[i].type}</h5>
          <h3 class="store__item__detail" id="itemPrice">${clothesShopArr[i].price}</h3>
          <button onclick="handleUpdateItem('${clothesShopArr[i].uid}')">Update Price</button>
          <button onclick="handleDeleteItem('${clothesShopArr[i].uid}')">Delete</button>
          </div>`;
      }
      return html;
    } else {
      throw new Error(`there is no item in the store`);
    }
  } catch (error) {
    console.error(error);
    return "";
  }
}

function addItem(event: any) {
  try {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const departement = event.target.elements.departement.value;
    const type = event.target.elements.type.value;
    const price = event.target.elements.price.valueAsNumber;
    const image = event.target.elements.image.value;
    clothesShopArr.push(new Item(name, departement, type, price, image));
    event.target.reset();
    if (!store) throw new Error("the store is available");
    store.innerHTML = showStore(clothesShopArr);
  } catch (error) {
    console.error(Error);
  }
}

function handleDeleteItem(uid: string) {
  try {
    console.log(uid);
    const index = clothesShopArr.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("item not found");
    clothesShopArr.splice(index, 1);

    if (!store) throw new Error("store is available");
    store.innerHTML = showStore(clothesShopArr);
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateItem(uid: string) {
  try {
    let newPrice;
    newPrice = prompt("Enter a new price to this item:");
    while (!newPrice || isNaN(newPrice)) {
      newPrice = prompt("You need to enter a number:");
      newPrice = parseInt(newPrice);
    }
    const index = clothesShopArr.findIndex((item) => item.uid === uid);
    if (index === -1) throw new Error("item not found");
    if (newPrice) clothesShopArr[index].price = newPrice;

    if (!store) throw new Error("ItemRoot is undefined");
    store.innerHTML = showStore(clothesShopArr);
  } catch (error) {
    console.error(error);
  }
}

function getAllItemInType(clothesArr: Item[]): void | false {
  try {
    if (clothesArr.length == 0)
      throw new Error(`there is no item in the store`);
    let typeGetFromUser;
    while (!typeGetFromUser) {
      typeGetFromUser = prompt(`Enter the type of item you will want to buy:`);
    }
    const chosenItemsArr = clothesArr.filter(
      (item) => item.type == typeGetFromUser
    );
    if (chosenItemsArr.length == 0)
      throw new Error(
        `items from type ${typeGetFromUser} is availble in our store`
      );
    else {
      if (store) {
        store.innerHTML = ` `;
        for (let i = 0; i < chosenItemsArr.length; i++) {
          store.innerHTML += `<div class= "store__item">
                    <img class="store__item__detail" id="image" src='${chosenItemsArr[i].image}' alt="image"/>
                    <h2 class="store__item__detail" id="itemName">${chosenItemsArr[i].name}</h2>
                    <h5 class="store__item__detail" id="itemDepartment">${chosenItemsArr[i].department}</h5>
                    <h5 class="store__item__detail" id="itemType">${chosenItemsArr[i].type}</h5>
                    <h3 class="store__item__detail" id="itemPrice">${chosenItemsArr[i].price}</h3>
                    <button onclick="handleUpdateItem('${clothesShopArr[i].uid}')">Update Price</button>
                    <button onclick="handleDeleteItem('${clothesShopArr[i].uid}')">Delete</button>
                    </div>`;
        }
      }
    }
  } catch (error) {
    console.error(error);
    if (store)
      store.innerHTML = `<h1>Item from this type is availble in our store </h1>`;
    return false;
  }
}

function sortArrByPrice(clothesArr: Item[]): Item[] | false {
  try {
    if (clothesArr.length == 0)
      throw new Error(`there is no item in the store`);
    const sortedArr = clothesArr.sort((a, b) => a.price - b.price);
    if (store) {
      store.innerHTML = ` `;
      for (let i = 0; i < sortedArr.length; i++) {
        store.innerHTML += `<div class= "store__item">
                <img class="store__item__detail" id="image" src='${sortedArr[i].image}' alt="image"/>
                <h2 class="store__item__detail" id="itemName">${sortedArr[i].name}</h2>
                <h5 class="store__item__detail" id="itemDepartment">${sortedArr[i].department}</h5>
                <h5 class="store__item__detail" id="itemType">${sortedArr[i].type}</h5>
                <h3 class="store__item__detail" id="itemPrice">${sortedArr[i].price}</h3>
                <button onclick="handleUpdateItem('${clothesShopArr[i].uid}')">Update Price</button>
                <button onclick="handleDeleteItem('${clothesShopArr[i].uid}')">Delete</button>
                </div>`;
      }
    }
    return sortedArr;
  } catch (error) {
    console.error(error);
    if (store) store.innerHTML = `<h1> We did not find item for you </h1>`;
    return false;
  }
}

function getTheCheapestItem(clothesArr: Item[]): Item[] | false {
  try {
    if (clothesArr.length == 0)
      throw new Error(`there is no item in the store`);
    const sortedArr = sortArrByPrice(clothesArr);
    let chosenItemsArr;
    if (sortedArr) {
      chosenItemsArr = sortedArr.filter(
        (item) => item.price == sortedArr[0].price
      );
      if (chosenItemsArr.length == 0)
        throw new Error(`there is no item in the store`);
      if (store) {
        store.innerHTML = ` `;
        for (let i = 0; i < chosenItemsArr.length; i++) {
          store.innerHTML += `<div class= "store__item">
                    <img class="store__item__detail" id="image" src='${chosenItemsArr[i].image}' alt="image"/>
                    <h2 class="store__item__detail" id="itemName">${chosenItemsArr[i].name}</h2>
                    <h5 class="store__item__detail" id="itemDepartment">${chosenItemsArr[i].department}</h5>
                    <h5 class="store__item__detail" id="itemType">${chosenItemsArr[i].type}</h5>
                    <h3 class="store__item__detail" id="itemPrice">${chosenItemsArr[i].price}</h3>
                    <button onclick="handleUpdateItem('${clothesShopArr[i].uid}')">Update Price</button>
                    <button onclick="handleDeleteItem('${clothesShopArr[i].uid}')">Delete</button>
                    </div>`;
        }
      }
    }
    return chosenItemsArr;
  } catch (error) {
    console.error(error);
    if (store) store.innerHTML = `<h1> We did not find item for you </h1>`;
    return false;
  }
}
