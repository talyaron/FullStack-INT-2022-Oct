var MensShirts = /** @class */ (function () {
    function MensShirts(type, price) {
        this.type = type;
        this.price = price;
    }
    return MensShirts;
}());
var Shoes = /** @class */ (function () {
    function Shoes(type, price) {
        this.type = type;
        this.price = price;
    }
    return Shoes;
}());
var MensPants = /** @class */ (function () {
    function MensPants(type, price) {
        this.type = type;
        this.price = price;
    }
    return MensPants;
}());
var buttonedShirt = new MensShirts("buttoned shirt", 200);
var t_Shirt = new MensShirts("t-shirt", 100);
var leansShirt = new MensShirts("jeans shirt", 250);
var boots = new Shoes("boots", 350);
var moccasin = new Shoes("moccasin", 450);
var peko = new Shoes("peko", 450);
var elegant = new MensPants("elegant", 200);
var jeans = new MensPants("jeans", 600);
var shortPants = new MensPants("short pants", 800);
var cothingStore = [
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
var t_shirt = document.querySelector(".img_t");
var shoes = document.querySelector(".img_s");
var pants = document.querySelector(".img_p");
var count = 0;
t_shirt.addEventListener("click", function (e) {
    count++;
    if (count === 1) {
        var ul_shirt = document.querySelector(".Shirt_list");
        for (var i = 0; i < 3; i++) {
            var List_shirt = document.createElement("li");
            List_shirt.innerHTML = cothingStore[i].type + " The price is : " + cothingStore[i].price + "  ";
            ul_shirt.appendChild(List_shirt);
        }
    }
});
var count1 = 0;
shoes.addEventListener("click", function (e) {
    count1++;
    if (count1 === 1) {
        var ul_shoes = document.querySelector(".shoes_list");
        for (var i = 3; i < 6; i++) {
            var shoes_1 = document.createElement("li");
            shoes_1.innerHTML = cothingStore[i].type + " The price is : " + cothingStore[i].price + "  ";
            ul_shoes.appendChild(shoes_1);
        }
    }
});
var count2 = 0;
pants.addEventListener("click", function (e) {
    count2++;
    if (count2 === 1) {
        var ul_pants = document.querySelector(".pans_list");
        for (var i = 6; i < 9; i++) {
            var pants_1 = document.createElement("li");
            pants_1.innerHTML = cothingStore[i].type + " The price is : " + cothingStore[i].price + "  ";
            ul_pants.appendChild(pants_1);
        }
    }
});
var Item_search = document.querySelector(".Item_search");
var ul_search = document.querySelector(".search_list");
Item_search.addEventListener("keyup", function (e) {
    ul_search.replaceChildren();
    if (Item_search.value != "") {
        for (var i in cothingStore) {
            debugger;
            if (cothingStore[i].type.includes(Item_search.value.toLowerCase()) ||
                cothingStore[i].price.toString().includes(Item_search.value)) {
                var li_search = document.createElement("li");
                li_search.innerHTML = cothingStore[i].type + " : " + cothingStore[i].price;
                ul_search.appendChild(li_search);
            }
        }
    }
    else {
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
