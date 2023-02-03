var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Bugs = /** @class */ (function () {
    function Bugs(name, positionX, positionY, display) {
        // this.positionX = positionX
        // this.positionY = positionY
        if (display === void 0) { display = 'flex'; }
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
        this.display = display;
    }
    Bugs.prototype.draw = function () {
        var mosquito = document.createElement("img");
        container.appendChild(mosquito);
        mosquito.setAttribute("class", "mosquito");
        mosquito.setAttribute("src", "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png");
        mosquito.style.position = "absolute";
        mosquito.style.top = this.positionY + "px";
        mosquito.style.left = this.positionX + "px";
        mosquito.style.display = this.display;
    };
    Bugs.prototype.update = function () {
        this.draw();
        this.positionX = "" + rndomX();
        this.positionY = "" + rndomY();
    };
    return Bugs;
}());
var rndomY = function () { return Math.random() * (contHeight - 100); };
var rndomX = function () { return Math.random() * (contWidth - 100); };
var mosquito = new Bugs("Vladi", rndomX(), rndomY());
// const vsfgb = new Bugs("drfg");
// mosquito.draw();
// vsfgb.draw();
