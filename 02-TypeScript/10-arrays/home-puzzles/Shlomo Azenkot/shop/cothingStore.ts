class MensShirts {
  constructor(public type: string, public price: number) {}
}

class Shoes {
  constructor(public type: string, public price: number) {}
}

class MensPants {
  constructor(public type: string, public price: number) {}
}

let buttonedShirt = new MensShirts("buttoned shirt", 200);
let t_Shirt = new MensShirts("t-shirt", 100);
let leansShirt = new MensShirts("jeans shirt", 250);

let boots = new Shoes("boots", 350);
let moccasin = new Shoes("moccasin", 450);
let peko = new Shoes("peko", 450);

let elegant = new MensPants("elegant", 200);
let jeans = new MensPants("jeans", 600);
let shortPants = new MensPants("short pants", 800);

let cothingStore = [
  buttonedShirt,
  t_Shirt,
  leansShirt,
  boots,
  moccasin,
  peko,
  elegant,
  jeans,
  shortPants,
];

let t_shirt = document.querySelector(".img_t") as HTMLImageElement;
let shoes = document.querySelector(".img_s") as HTMLImageElement;
let pants = document.querySelector(".img_p") as HTMLImageElement;

let count = 0;
t_shirt.addEventListener("click", (e) => {
  count++;
  if (count === 1) {
    let ul_shirt = document.querySelector(".Shirt_list") as HTMLUListElement;

    for (let i = 0; i < 3; i++) {
      const List_shirt = <HTMLElement>document.createElement("li");
      List_shirt.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
      ul_shirt.appendChild(List_shirt);
    }
  }
});
let count1 = 0;
shoes.addEventListener("click", (e) => {
  count1++;
  if (count1 === 1) {
    let ul_shoes = document.querySelector(".shoes_list") as HTMLUListElement;

    for (let i = 3; i < 6; i++) {
      const shoes = <HTMLElement>document.createElement("li");
      shoes.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
      ul_shoes.appendChild(shoes);
    }
  }
});

let count2 = 0;
pants.addEventListener("click", (e) => {
  count2++;
  if (count2 === 1) {
    let ul_pants = document.querySelector(".pans_list") as HTMLUListElement;
    for (let i = 6; i < 9; i++) {
      const pants = <HTMLElement>document.createElement("li");
      pants.innerHTML = `${cothingStore[i].type} The price is : ${cothingStore[i].price}  `;
      ul_pants.appendChild(pants);
    }
  }
});

const Item_search = document.querySelector(".Item_search") as HTMLInputElement;
let ul_search = document.querySelector(".search_list") as HTMLUListElement;

Item_search.addEventListener("keyup", (e) => {
  ul_search.replaceChildren();
  if (Item_search.value != "") {
    for (let i in cothingStore) {
      debugger;
      if (
        cothingStore[i].type.includes(Item_search.value.toLowerCase()) ||
        cothingStore[i].price.toString().includes(Item_search.value)
      ) {
        const li_search = document.createElement("li");
        li_search.innerHTML = `${cothingStore[i].type} : ${cothingStore[i].price}`;
        ul_search.appendChild(li_search);
      }
    }
  } else {
    ul_search.replaceChildren();
  }
});

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
