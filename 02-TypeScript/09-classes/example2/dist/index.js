var x = { a: 2, b: "55" };
function uid() {
    return "id-" + Math.random() * 1000000000;
}
var User = /** @class */ (function () {
    function User(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        //preoperties
        this.id = uid();
        this.score = 0;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.increaseScore = function () {
        var _score = this.score + 34;
        _score = Math.log(_score);
        this.score = _score;
    };
    return User;
}());
var esti = new User("Esti", "Maoda");
console.log(esti);
var vika = new User("Vika", "Galperin");
vika.setName = "vika";
console.log(vika.getName);
vika.increaseScore();
console.log(vika);
