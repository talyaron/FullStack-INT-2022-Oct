var Color = /** @class */ (function () {
    function Color(name) {
        this.name = name;
    }
    return Color;
}());
var yellow = new Color("yellow");
var blue = new Color("blue");
var white = new Color("white");
var red = new Color("red");
var pink = new Color("pink");
var purple = new Color("purple");
var green = new Color("green");
var black = new Color("black");
var colorsArray = [yellow, blue, white, red, pink, purple, green, black];
console.log("the length of the array is " + colorsArray.length);
console.log("in number 0 of the array we have " + colorsArray[0].name);
console.log("in number 0 of the array we have " + colorsArray[-1]);
