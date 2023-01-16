class CothingStore {
  private _gender: string;
  private _type: string;
  private _price: number;
  private _imgLink: string;

  constructor(gender: string, type: string, price: number, imgLink: string) {
    this._gender = gender;
    this._type = type;
    this._price = price;
    this._imgLink = imgLink;
  }
  get getCategory() {
    return this._gender;
  }
  get getType() {
    return this._type;
  }
  get getPrice() {
    return this._price;
  }
  get getimgLink() {
    return this._imgLink;
  }

  // -----------------------------------

  set setPrice(value: number) {
    if (value < 50) {
      throw new Error("The price should be greater than fifty");
    }
    this._price = value;
  }
}

const nikeShoes = new CothingStore(
  "man",
  "Nike shoes",
  400,
  "https://cdn.shopify.com/s/files/1/0659/0713/0614/products/jd_554531_a_1000x.jpg?v=1667998952"
);
const buttonedShirt = new CothingStore(
  "man",
  "Tommy shirt",
  600,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXursVvHsRx7sgGcB6UnhLgfvVsC8nNFNKdewtwcKudb8sFzpphZ-9vAoEdJwJ_W4NFPw&usqp=CAU"
);
const woolCoat = new CothingStore(
  "man",
  "long woolen coat",
  900,
  "https://litb-cgis.rightinthebox.com/images/640x853/202212/bps/product/inc/opttrx1671504674432.jpg"
);
const slippers = new CothingStore(
  "man",
  "slippers",
  150,
  "https://www.ikea.com/il/he/images/products/obegraensad-slippers-black__1115563_pe872129_s5.jpg?f=xs"
);
const belt = new CothingStore(
  "man",
  "Leather belt",
  250,
  "https://nappa.co.il/wp-content/uploads/2020/10/%D7%97%D7%92%D7%95%D7%A8%D7%94-%D7%9C%D7%92%D7%91%D7%A8-%D7%9C%D7%92%D7%99%D7%A0%D7%A1-%D7%A2%D7%95%D7%A8-%D7%97%D7%95%D7%9D-%D7%97%D7%92%D7%95%D7%A8%D7%95%D7%AA..jpg"
);
const Jeans = new CothingStore(
  "man",
  "Black Guinness",
  750,
  "https://d3thqe68ymbqps.cloudfront.net/1015600-home_default/%D7%92%D7%99%D7%A0%D7%A1-%D7%A9%D7%97%D7%95%D7%A8-%D7%92%D7%91%D7%A8%D7%99%D7%9D-%D7%A6%D7%91%D7%A2-%D7%98%D7%94%D7%95%D7%A8-%D7%A1%D7%A7%D7%99%D7%A0%D7%99-%D7%A1%D7%98%D7%A8%D7%A5-%D7%92%D7%99.jpg"
);

const Sunglasses = new CothingStore(
  "man",
  "Sunglasses",
  400,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIPqb_otDK480LArYZ8DX0rbXakOY7gHHbg&usqp=CAU"
);
const clothes = new CothingStore(
  "man",
  "clothes",
  120,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaG1wfyhVv0jT1LyyYRNRZP4-kxzbzGf-MzDOIvm02yIBPzzW97gHFdkctN9DAsBiMPw4&usqp=CAU"
);
const hat = new CothingStore(
  "female",
  "big hat",
  180,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JUqv8TPvOllTGwzId8kvMhaCNPvKfY9HUg&usqp=CAU"
);

const cothingStore: CothingStore[] = [
  nikeShoes,
  buttonedShirt,
  woolCoat,
  slippers,
  belt,
  Jeans,
  Sunglasses,
  clothes,
  hat,
];

const Welcome = document.querySelector(".hello") as HTMLHRElement;
const username = localStorage.getItem("input_name");
Welcome.innerHTML = ` Welcome <span class="userName"> "${username}" </span>,glad you chose Shlomi Fashion </h1> `;

const wraps_pictures = document.querySelector(
  ".wraps_pictures"
) as HTMLDivElement;

let divAdd = document.createElement("div");
divAdd.style.backgroundColor = "white";
divAdd.innerHTML = `<i class="fa-solid fa-plus " id="a" ></i>`;
wraps_pictures.append(divAdd);

const AddItem = document.querySelector(".AddItem") as HTMLInputElement;
divAdd.addEventListener("click", (e) => {
  AddItem.style.display = "block";
});

// --------------------------------------------------------------

for (let i in cothingStore) {
  try {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const price = document.createElement("p");
    const type = document.createElement("h2");
    type.innerHTML = cothingStore[i].getType.toString();
    price.innerHTML = `${cothingStore[
      i
    ].getPrice.toString()}   <i class="fa-solid fa-shekel-sign iconS"></i>`;
    img.src = cothingStore[i].getimgLink;
    wraps_pictures.appendChild(div);
    div.appendChild(img);
    div.appendChild(price);
    div.appendChild(type);
  } catch (error) {
    throw new Error(error);
  }
}

const add = document.querySelector(".add") as HTMLButtonElement;
add.addEventListener("click", (e) => {
  try {
    const gender = (document.querySelector(".gender") as HTMLInputElement)
      .value;
    const type = (document.querySelector(".type ") as HTMLInputElement).value;
    const price = (document.querySelector(".price") as HTMLInputElement).value;
    const imgLink = (document.querySelector(".imgLink ") as HTMLInputElement)
      .value;
    if (
      gender &&
      gender != "" &&
      type &&
      type != "" &&
      price &&
      price != "" &&
      imgLink &&
      imgLink != ""
    ) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      let price2 = document.createElement("p");
      let type2 = document.createElement("h2");
      img.src = imgLink;
      div.append(img);
      price2.innerHTML = `${price}  <i class="fa-solid fa-shekel-sign iconS"></i>`;
      div.appendChild(price2);
      type2.innerHTML = type;
      div.appendChild(type2);

      wraps_pictures.append(div);
    }

    if (gender && type && price && imgLink) {
      AddItem.style.display = "none";
      const add = new CothingStore(gender, type, parseInt(price), imgLink);
      cothingStore.push(add);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const searchItem = document.querySelector(".search") as HTMLInputElement;
searchItem.addEventListener("keyup", (e) => {
  try {
    wraps_pictures.replaceChildren();
    divAdd = document.createElement("div");
    divAdd.style.backgroundColor = "white";
    divAdd.innerHTML = `<i class="fa-solid fa-plus " id="a" ></i>`;
    wraps_pictures.append(divAdd);

    if (searchItem.value != "") {
      for (let i in cothingStore) {
        if (
          cothingStore[i].getType.includes(searchItem.value.toLowerCase()) ||
          cothingStore[i].getPrice.toString().includes(searchItem.value)
        ) {
          const div = document.createElement("div");
          const img = document.createElement("img");
          const price = document.createElement("p");
          const type = document.createElement("h2");
          type.innerHTML = cothingStore[i].getType.toString();
          price.innerHTML = `${cothingStore[
            i
          ].getPrice.toString()}   <i class="fa-solid fa-shekel-sign iconS"></i>`;
          img.src = cothingStore[i].getimgLink;
          wraps_pictures.appendChild(div);
          div.appendChild(img);
          div.appendChild(price);
          div.appendChild(type);
        }
      }
    } else {
      for (let i in cothingStore) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const price = document.createElement("p");
        const type = document.createElement("h2");
        type.innerHTML = cothingStore[i].getType.toString();
        price.innerHTML = `${cothingStore[
          i
        ].getPrice.toString()}   <i class="fa-solid fa-shekel-sign iconS"></i>`;
        img.src = cothingStore[i].getimgLink;
        wraps_pictures.appendChild(div);
        div.appendChild(img);
        div.appendChild(price);
        div.appendChild(type);
      }
    }
  } catch (error) {
    throw new Error(error);
  }
});

// let t_shirt = document.querySelector(".img_t") as HTMLImageElement;
// let shoes = document.querySelector(".img_s") as HTMLImageElement;
// let pants = document.querySelector(".img_p") as HTMLImageElement;

// const username = document.querySelector(".hello") as  HTMLHeadElement;
// let usernameV = localStorage.getItem("input_name");
// if (usernameV){
//   username.innerHTML =` Welcome ${usernameV} , how fun that you chose Shlomi clothes`   ;
// }

// let count = 0;
// t_shirt.addEventListener("click", (e) => {
//   count++;
//   if (count === 1) {
//     let ul_shirt = document.querySelector(".Shirt_list") as HTMLUListElement;

//     for (let i = 0; i < 3; i++) {
//       const List_shirt = <HTMLElement>document.createElement("li");
//       List_shirt.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
//       ul_shirt.appendChild(List_shirt);
//     }
//   }
// });
// let count1 = 0;
// shoes.addEventListener("click", (e) => {
//   count1++;
//   if (count1 === 1) {
//     let ul_shoes = document.querySelector(".shoes_list") as HTMLUListElement;

//     for (let i = 3; i < 6; i++) {
//       const shoes = <HTMLElement>document.createElement("li");
//       shoes.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
//       ul_shoes.appendChild(shoes);
//     }
//   }
// });

// let count2 = 0;
// pants.addEventListener("click", (e) => {
//   count2++;
//   if (count2 === 1) {
//     let ul_pants = document.querySelector(".pans_list") as HTMLUListElement;
//     for (let i = 6; i < 9; i++) {
//       const pants = <HTMLElement>document.createElement("li");
//       pants.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
//       ul_pants.appendChild(pants);
//     }
//   }
// });

// const Item_search = document.querySelector(".Item_search") as HTMLInputElement;
// let ul_search = document.querySelector(".search_list") as HTMLUListElement;

// Item_search.addEventListener("keyup", (e) => {
//   ul_search.replaceChildren();
//   if (Item_search.value != "") {
//     for (let i in cothingStore) {
//       debugger;
//       if (
//         cothingStore[i].type.includes(Item_search.value.toLowerCase()) ||
//         cothingStore[i].price.toString().includes(Item_search.value)
//       ) {
//         const li_search = document.createElement("li");
//         li_search.innerHTML = `${cothingStore[i].type} : ${cothingStore[i].price}`;
//         ul_search.appendChild(li_search);
//       }
//     }
//   } else {
//     ul_search.replaceChildren();
//   }
// });

// }

// class Person {
//     constructor(public name: string, public age: number, public gender: string) {}
//   }

//   const noam = new Person("noam", 33, "male");
//   const ruth = new Person("Ruth", 27, "female");
//   const dan = new Person("Dan", 41, "male");
//   /// we use lists to hold togther many elements
//   const persons: Person[] = [noam, ruth, dan];
//   console.log(persons);
//   console.log(persons[1]);

//   console.log(persons.length);
//   //sort
//   persons.sort((a, b) => a.age - b.age);

//   console.log(persons);
//   //filter
//   const personsAbove30: Person[] = persons.filter((person) => person.age > 30);
//   console.log(personsAbove30);

//   //callback
//   function logPerson(person: Person) {
//     console.log(person.name, person.age);
//   }

//   persons.forEach(logPerson);

//   persons.forEach(function (person: Person) {
//     console.log(person.name, person.age);
//   });

//   console.log(persons.filter((person) => person.gender === "female"));
