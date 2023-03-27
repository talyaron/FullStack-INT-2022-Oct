function showStore(clothesShopArr: Item[]): void | false {
  try {
    if (store && clothesShopArr.length != 0) {
      store.innerHTML=``;
      for (let i = 0; i < clothesShopArr.length; i++) {
        store.innerHTML += `<div class= "store__item">
                <img class="store__item__detail" id="image" src='${clothesShopArr[i].image}' alt="image"/>
                <h2 class="store__item__detail" id="itemName">${clothesShopArr[i].name}</h2>
                <h5 class="store__item__detail" id="itemDepartment">${clothesShopArr[i].department}</h5>
                <h5 class="store__item__detail" id="itemType">${clothesShopArr[i].type}</h5>
                <h3 class="store__item__detail" id="itemPrice">${clothesShopArr[i].price}</h3>
                </div>`;
      }
    } else {
      throw new Error(`there is no item in the store`);
    }
  } catch (error) {
    console.error(error);
    return false;
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
                  </div>`;
        }
      }
    }
  } catch (error) {
    console.error(error);
    if (store) store.innerHTML = `<h1>Item from this type is availble in our store </h1>`;
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
