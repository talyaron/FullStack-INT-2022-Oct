var product = /** @class */ (function () {
    function product(name, department, type, price) {
        this.name = name;
        this.department = department;
        this.type = type;
        this.price = price;
    }
    return product;
}());
var cbr500 = new product("CBR500", "Motorcycle", "Honda", 80);
var cbr1000 = new product("CBR1000", "Motorcycle", "Honda", 200);
var cbr250 = new product("CBR250", "Motorcycle", "Honda", 30);
var ninja650 = new product("NINJA650", "Motorcycle", "kawasaki", 80);
var ninja1000 = new product("NINJA1000", "Motorcycle", "kawasaki", 200);
var ninja250 = new product("NINJA250", "Motorcycle", "kawasaki", 30);
var PartushMotors = [
    cbr1000, cbr250, cbr500, ninja1000, ninja650, ninja250,
];
var field = document.querySelector(".items");
var li = Array.from(field.children);
var select = document.getElementById("select");
var ar = [];
for (var _i = 0, li_1 = li; _i < li_1.length; _i++) {
    var i = li_1[_i];
    var last = i.lastElementChild;
    var x = last.textContent.trim();
    var y = number(x.substring(1));
    i.setAttribute("data-price", y);
    ar.push(i);
}
select.onchange = sortingValue;
function sortingValue() {
    if (this.value == "Defualt") {
        while (field.firstchild) {
            field.removeChild(field.firstChild);
        }
        field.append.apply(field, ar);
    }
    if (this.value === "LowToHigh") {
        sortElem(field, li, true);
    }
    if (this.value === "HighToLow") {
        sortElem(field, li, false);
    }
}
function sortElem(field, li, asc) {
    var dm, sortLi;
    dm = asc ? 1 : -1;
    sortLi = li.sort(function (a, b) {
        var ax = a.getAttribute("data-price");
        var bx = b.getAttribute("data-price");
        return ax > bx ? (1 * dm) : (-1 * dm);
    });
    while (field, firstChild) {
        field.removeChild(field.firstChild);
    }
    field.append.apply(field, sortLi);
}
