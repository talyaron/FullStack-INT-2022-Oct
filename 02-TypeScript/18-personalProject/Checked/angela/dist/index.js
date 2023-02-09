var _a, _b, _c;
//why do you use let? please use types.
var selectedDrink = null;
var drinksToServe = [];
var allBarItems = [];
var points = 50;
var hiScore = 50;
(_a = document.getElementById("points")) === null || _a === void 0 ? void 0 : _a.innerHTML = "your score is " + points;
try {
    if (localStorage.getItem("hiScore") == null) {
        localStorage.setItem("hiScore", 50);
    }
    else {
        hiScore = localStorage.getItem("hiScore");
    }
}
catch (error) {
    localStorage.setItem("hiScore", 50);
}
(_b = document.getElementById("highScore")) === null || _b === void 0 ? void 0 : _b.innerHTML =
    "your high score is " + hiScore;
var barItem = /** @class */ (function () {
    function barItem(name, alchol) {
        this.name = name;
        this.alchol = alchol;
    }
    return barItem;
}());
var coctail = /** @class */ (function () {
    function coctail(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
    return coctail;
}());
var bi_ice = new barItem("ice", false);
var bi_soda = new barItem("soda", false);
var bi_lemon = new barItem("lemon", false);
var bi_cranberry = new barItem("cranberry", false);
var bi_lime = new barItem("lime", false);
var bi_vodka = new barItem("vodka", true);
var bi_brandy = new barItem("brandy", true);
var bi_champagne = new barItem("champagne", true);
var bi_gin = new barItem("gin", true);
var bi_rum = new barItem("rum", true);
var bi_tequila = new barItem("tequila", true);
var bi_tripleSec = new barItem("tripleSec", true);
var bi_whiskey = new barItem("whiskey", true);
var bi_whiteRum = new barItem("whiteRum", true);
var bi_mint = new barItem("mint", false);
var bi_vermouth = new barItem("vermouth", true);
var bi_campari = new barItem("campari", true);
var bi_Angostura = new barItem("Angostura", false);
var bi_sugar = new barItem("sugar", false);
var bi_syrup = new barItem("syrup", false);
var bi_coffee = new barItem("coffee", false);
var bi_orange = new barItem("orange", false);
var bi_grapefruit = new barItem("grapefruit", false);
var bi_ginger = new barItem("ginger", false);
var bi_olives = new barItem("olives", false);
var drink_1 = new coctail("vodka_soda", [bi_vodka, bi_soda]);
var drink_2 = new coctail("mojito", [bi_lime, bi_mint, bi_whiteRum, bi_soda]);
var drink_3 = new coctail("cosmopolitan", [
    bi_vodka,
    bi_cranberry,
    bi_lime,
    bi_ice,
    bi_tripleSec,
]);
var drink_4 = new coctail("Negroni", [bi_gin, bi_campari, bi_vermouth]);
var drink_5 = new coctail("Manhattan", [
    bi_whiskey,
    bi_vermouth,
    bi_Angostura,
    bi_ice,
]);
var drink_6 = new coctail("Old Fashioned", [
    bi_whiskey,
    bi_Angostura,
    bi_sugar,
]);
var drink_7 = new coctail("Moscow Mule", [bi_vodka, bi_ginger, bi_lime]);
var drink_8 = new coctail("Whiskey Sour", [bi_whiskey, bi_lemon, bi_sugar]);
var drink_9 = new coctail("French 75", [
    bi_gin,
    bi_syrup,
    bi_lemon,
    bi_champagne,
]);
var drink_10 = new coctail("gimlet", [bi_gin, bi_syrup, bi_lime]);
var drink_11 = new coctail("mimosa", [bi_champagne, bi_orange]);
var drink_12 = new coctail("paloma", [bi_tequila, bi_lime, bi_grapefruit]);
var drink_13 = new coctail("Daiquiri", [bi_whiteRum, bi_syrup, bi_lime]);
var drink_14 = new coctail("black russian", [bi_vodka, bi_coffee]);
var drink_15 = new coctail("martini", [bi_gin, bi_olives]);
var drink_16 = new coctail("all", [
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
for (var i = 0; i < drinksToServe.length; i++) {
    var currntDrink = drinksToServe[i].ingredients;
    for (var x = 0; x < currntDrink.length; x++) {
        var drinkName = currntDrink[x].name;
        if (allBarItems.indexOf(drinkName) == -1) {
            allBarItems.push(drinkName);
        }
    }
}
for (var i = 0; i < allBarItems.length; i++) {
    var imgPath = "./imgs/" + allBarItems[i] + ".png";
    var newDiv = document.createElement("div");
    newDiv.id = allBarItems[i];
    newDiv.className = "barItem";
    newDiv.title = allBarItems[i];
    newDiv.style = "background-image: url('" + imgPath + "');";
    newDiv.draggable = true;
    newDiv.setAttribute("ondragstart", "drag(event)");
    (_c = document.getElementById("shelf1")) === null || _c === void 0 ? void 0 : _c.appendChild(newDiv);
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
    var obj = "#" + data;
    $(obj).fadeOut(1000);
}
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
function selectCocktail() {
    var _a, _b, _c, _d, _e, _f;
    var drinkId = generateRandomInteger(drinksToServe.length);
    window.selectedDrink = drinksToServe[drinkId];
    var text = "";
    for (var i = 0; i < selectedDrink.ingredients.length; i++) {
        text = text + selectedDrink.ingredients[i].name + "</br>";
    }
    (_a = document.getElementById("hint")) === null || _a === void 0 ? void 0 : _a.innerHTML = text;
    $("#hint").fadeOut(5000);
    (_b = document.getElementById("customerDialog")) === null || _b === void 0 ? void 0 : _b.innerHTML =
        "hello please give me  " + selectedDrink.name;
    while (((_c = document.getElementById("shaker")) === null || _c === void 0 ? void 0 : _c.children.length) > 0) {
        $("#" + ((_d = document.getElementById("shaker")) === null || _d === void 0 ? void 0 : _d.children[0].id)).fadeIn(500);
        var targetShelf = "shelf1";
        if (((_e = document.getElementById("shelf1")) === null || _e === void 0 ? void 0 : _e.children.length) > 19) {
            targetShelf = "shelf2";
        }
        document
            .getElementById(targetShelf)
            .append((_f = document.getElementById("shaker")) === null || _f === void 0 ? void 0 : _f.children[0]);
    }
}
selectCocktail();
function serve() {
    var _a, _b, _c, _d, _e, _f, _g;
    var drinkTaste = true;
    var shakerContent = (_a = document.getElementById("shaker")) === null || _a === void 0 ? void 0 : _a.children;
    if ((shakerContent === null || shakerContent === void 0 ? void 0 : shakerContent.length) != selectedDrink.ingredients.length) {
        //loose
        (_b = document.getElementById("customerDialog")) === null || _b === void 0 ? void 0 : _b.innerHTML =
            "wft is this abomination , taste like shit";
        console.log("lose1");
        points = points - 10;
    }
    else {
        try {
            var _loop_1 = function (i) {
                if (selectedDrink.ingredients.findIndex(function (s) { return s.name === shakerContent[i].id; }) == -1) {
                    drinkTaste = false;
                }
            };
            for (var i = 0; i < (shakerContent === null || shakerContent === void 0 ? void 0 : shakerContent.length); i++) {
                _loop_1(i);
            }
            if (drinkTaste == true) {
                //win
                (_c = document.getElementById("customerDialog")) === null || _c === void 0 ? void 0 : _c.innerHTML =
                    "thank you, that was very tasty";
                points = points + 5;
                console.log("win");
            }
            else {
                //loose
                (_d = document.getElementById("customerDialog")) === null || _d === void 0 ? void 0 : _d.innerHTML =
                    "give this cocktail to your manger";
                console.log("lose2");
                points = points - 10;
            }
        }
        catch (_h) {
            console.error();
        }
    }
    if (points > hiScore) {
        hiScore = points;
        localStorage.setItem("hiScore", points);
        (_e = document.getElementById("highScore")) === null || _e === void 0 ? void 0 : _e.innerHTML = "your highest score : " + points;
    }
    (_f = document.getElementById("points")) === null || _f === void 0 ? void 0 : _f.innerHTML = "currnet score " + points + ": ";
    if (points < 1) {
        (_g = document.getElementById("customerDialog")) === null || _g === void 0 ? void 0 : _g.innerHTML =
            "YOU ARE FIRED , go home and learn some js";
    }
    else {
        setTimeout(selectCocktail, 3000);
    }
}
var timer;
var count = document.querySelector("#timer");
(function () {
    var sec = 0;
    timer = setInterval(function () {
        count === null || count === void 0 ? void 0 : count.innerHTML = "00:" + sec;
        sec++;
        if (sec > 59) {
            var min = 1;
            min++;
            count === null || count === void 0 ? void 0 : count.innerHTML = "00:" + sec;
        }
    }, 1000);
})();
