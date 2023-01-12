var Pepole = /** @class */ (function () {
    function Pepole(name) {
        this.name = name;
    }
    return Pepole;
}());
var lior = new Pepole("lior oil");
var ori = new Pepole("ori shyui");
var yosi = new Pepole("yosi oriel");
var pepole = [lior, ori, yosi, 44, 34];
var oti = pepole.sort();
console.log(oti);
