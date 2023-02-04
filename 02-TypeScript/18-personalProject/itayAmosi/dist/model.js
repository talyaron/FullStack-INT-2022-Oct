var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal(name, imageUrl, display) {
        if (display === void 0) { display = 'flex'; }
        this.name = name;
        this.imageUrl = imageUrl;
        this.display = display;
        this.positionX = randomX();
        this.positionY = randomY();
    }
    Animal.prototype.draw = function () {
        var animal = document.createElement("img");
        container.appendChild(animal);
        animal.setAttribute("class", this.name);
        animal.setAttribute("src", this.imageUrl);
        // "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png"
        animal.style.position = "absolute";
        animal.style.top = this.positionY + "px";
        animal.style.left = this.positionX + "px";
        animal.style.display = this.display;
    };
    Animal.prototype.update = function () {
        this.draw();
        this.positionX = randomX();
        this.positionY = randomY();
    };
    return Animal;
}());
var randomY = function () { return Math.random() * (contHeight - 100); };
var randomX = function () { return Math.random() * (contWidth - 100); };
var mosquito = new Animal("mosquito", "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png");
var bee = new Animal("bee", "https://www.freepnglogos.com/uploads/bee-png/bee-the-economic-value-pollination-modern-agriculture-8.png");
// const vsfgb = new Bugs("drfg");
// mosquito.draw();
setTimeout(function () { return console.log(mosquito.positionX, mosquito.positionY); }, 500);
// vsfgb.draw();
