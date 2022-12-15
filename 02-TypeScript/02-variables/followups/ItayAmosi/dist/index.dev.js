"use strict";

console.log("hi itay"); //var

var x = 42;
console.log(x);
var y = 58;
console.log(y);
var z = y + x;
console.log(z);
z = y * x;
console.log(z);
z = y * x + x;
console.log(z);
z = y + x / x;
console.log(z);

function handleSubmit(event) {
  event.preventDefault();
  var amount = event.target.elements.number.valueAsNumber;
  console.log(amount);
  var vat = amount * 1.17;
  document.querySelector('#root').innerText = "Vat is ".concat(vat);
}