//why do you use let? please use types.
let selectedDrink = null;
let drinksToServe = [];
let allBarItems = [];
let points = 50;
let hiScore = 50;
document.getElementById("points")?.innerHTML = "your score is " + points;
try {
  if (localStorage.getItem("hiScore") == null) {
    localStorage.setItem("hiScore", 50);
  } else {
    hiScore = localStorage.getItem("hiScore");
  }
} catch (error) {
  localStorage.setItem("hiScore", 50);
}
document.getElementById("highScore")?.innerHTML =
  "your high score is " + hiScore;

class barItem {
  name: string;
  alchol: boolean;
  constructor(name: string, alchol: boolean) {
    this.name = name;
    this.alchol = alchol;
  }
}
class coctail {
  name: string;
  ingredients: barItem[];
  constructor(name: string, ingredients: barItem[]) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

const bi_ice = new barItem("ice", false);
const bi_soda = new barItem("soda", false);
const bi_lemon = new barItem("lemon", false);
const bi_cranberry = new barItem("cranberry", false);
const bi_lime = new barItem("lime", false);
const bi_vodka = new barItem("vodka", true);
const bi_brandy = new barItem("brandy", true);
const bi_champagne = new barItem("champagne", true);
const bi_gin = new barItem("gin", true);
const bi_rum = new barItem("rum", true);
const bi_tequila = new barItem("tequila", true);
const bi_tripleSec = new barItem("tripleSec", true);
const bi_whiskey = new barItem("whiskey", true);
const bi_whiteRum = new barItem("whiteRum", true);
const bi_mint = new barItem("mint", false);
const bi_vermouth = new barItem("vermouth", true);
const bi_campari = new barItem("campari", true);
const bi_Angostura = new barItem("Angostura", false);
const bi_sugar = new barItem("sugar", false);
const bi_syrup = new barItem("syrup", false);
const bi_coffee = new barItem("coffee", false);
const bi_orange = new barItem("orange", false);
const bi_grapefruit = new barItem("grapefruit", false);
const bi_ginger = new barItem("ginger", false);
const bi_olives = new barItem("olives", false);

let drink_1 = new coctail("vodka_soda", [bi_vodka, bi_soda]);
let drink_2 = new coctail("mojito", [bi_lime, bi_mint, bi_whiteRum, bi_soda]);
let drink_3 = new coctail("cosmopolitan", [
  bi_vodka,
  bi_cranberry,
  bi_lime,
  bi_ice,
  bi_tripleSec,
]);
let drink_4 = new coctail("Negroni", [bi_gin, bi_campari, bi_vermouth]);
let drink_5 = new coctail("Manhattan", [
  bi_whiskey,
  bi_vermouth,
  bi_Angostura,
  bi_ice,
]);
let drink_6 = new coctail("Old Fashioned", [
  bi_whiskey,
  bi_Angostura,
  bi_sugar,
]);
let drink_7 = new coctail("Moscow Mule", [bi_vodka, bi_ginger, bi_lime]);
let drink_8 = new coctail("Whiskey Sour", [bi_whiskey, bi_lemon, bi_sugar]);
let drink_9 = new coctail("French 75", [
  bi_gin,
  bi_syrup,
  bi_lemon,
  bi_champagne,
]);
let drink_10 = new coctail("gimlet", [bi_gin, bi_syrup, bi_lime]);
let drink_11 = new coctail("mimosa", [bi_champagne, bi_orange]);
let drink_12 = new coctail("paloma", [bi_tequila, bi_lime, bi_grapefruit]);
let drink_13 = new coctail("Daiquiri", [bi_whiteRum, bi_syrup, bi_lime]);
let drink_14 = new coctail("black russian", [bi_vodka, bi_coffee]);
let drink_15 = new coctail("martini", [bi_gin, bi_olives]);
let drink_16 = new coctail("all", [
  bi_tequila,
  bi_rum,
  bi_champagne,
  bi_brandy,
]);
//why dont you push the drinks directly to drinksToServe

for (var nickName in this) {
  if (nickName.startsWith("drink_")) {
    drinksToServe.push(this[nickName]);
    console.log(nickName);
  }
}

//code can be much clearer, if you use functions
for (let i = 0; i < drinksToServe.length; i++) {
  let currntDrink = drinksToServe[i].ingredients;
  for (let x = 0; x < currntDrink.length; x++) {
    let drinkName = currntDrink[x].name;
    if (allBarItems.indexOf(drinkName) == -1) {
      allBarItems.push(drinkName);
    }
  }
}
for (let i = 0; i < allBarItems.length; i++) {
  var imgPath = "./imgs/" + allBarItems[i] + ".png";
  const newDiv = document.createElement("div");
  newDiv.id = allBarItems[i];
  newDiv.className = "barItem";
  newDiv.title = allBarItems[i];
  newDiv.style = "background-image: url('" + imgPath + "');";
  newDiv.draggable = true;
  newDiv.setAttribute("ondragstart", "drag(event)");

  document.getElementById("shelf1")?.appendChild(newDiv);
  if (document.getElementById("shelf1").children.length > 19) {
    document.getElementById("shelf2").append(newDiv);
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  // ev.target.style= 'display:none';
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  let obj = "#" + data;
  $(obj).fadeOut(1000);
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

function selectCocktail() {
  const drinkId = generateRandomInteger(drinksToServe.length);
  window.selectedDrink = drinksToServe[drinkId];
  let text = "";
  for (let i = 0; i < selectedDrink.ingredients.length; i++) {
    text = text + selectedDrink.ingredients[i].name + "</br>";
  }
  document.getElementById("hint")?.innerHTML = text;

  $("#hint").fadeOut(5000);

  document.getElementById("customerDialog")?.innerHTML =
    "hello please give me  " + selectedDrink.name;
  while (document.getElementById("shaker")?.children.length > 0) {
    $("#" + document.getElementById("shaker")?.children[0].id).fadeIn(500);
    var targetShelf = "shelf1";
    if (document.getElementById("shelf1")?.children.length > 19) {
      targetShelf = "shelf2";
    }
    document
      .getElementById(targetShelf)
      .append(document.getElementById("shaker")?.children[0]);
  }
}

selectCocktail();

function serve() {
  let drinkTaste = true;
  let shakerContent = document.getElementById("shaker")?.children;
  if (shakerContent?.length != selectedDrink.ingredients.length) {
    //loose
    document.getElementById("customerDialog")?.innerHTML =
      "wft is this abomination , taste like shit";
    console.log("lose1");
    points = points - 10;
  } else {
    try {
      for (let i = 0; i < shakerContent?.length; i++) {
        if (
          selectedDrink.ingredients.findIndex(
            (s) => s.name === shakerContent[i].id
          ) == -1
        ) {
          drinkTaste = false;
        }
      }
      if (drinkTaste == true) {
        //win
        document.getElementById("customerDialog")?.innerHTML =
          "thank you, that was very tasty";
        points = points + 5;
        console.log("win");
      } else {
        //loose
        document.getElementById("customerDialog")?.innerHTML =
          "give this cocktail to your manger";
        console.log("lose2");
        points = points - 10;
      }
    } catch {
      console.error();
    }
  }
  if (points > hiScore) {
    hiScore = points;
    localStorage.setItem("hiScore", points);
    document.getElementById(
      "highScore"
    )?.innerHTML = `your highest score : ${points}`;
  }
  document.getElementById("points")?.innerHTML = `currnet score ${points}: `;
  if (points < 1) {
    document.getElementById("customerDialog")?.innerHTML =
      "YOU ARE FIRED , go home and learn some js";
  } else {
    setTimeout(selectCocktail, 3000);
  }
}

let timer;
let count = document.querySelector("#timer");
(function () {
  let sec = 0;
  timer = setInterval(() => {
    count?.innerHTML = "00:" + sec;
    sec++;
    if (sec > 59) {
      let min = 1;
      min++;
      count?.innerHTML = "00:" + sec;
    }
  }, 1000);
})();
