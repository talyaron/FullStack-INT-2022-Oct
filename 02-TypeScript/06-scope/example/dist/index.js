//global scope
var shouldIGo = true;
if (shouldIGo) {
    //local scope
    var x = 20;
    console.log(x);
    x = 50;
    console.log(x);
}
for (var i = 0; i < 4; i++) {
    var x = 12;
    console.log(i + ": x is " + x);
}
var order = prompt("what will yo order");
// order = "please order fast";
document.write("I am preparing a " + order);
