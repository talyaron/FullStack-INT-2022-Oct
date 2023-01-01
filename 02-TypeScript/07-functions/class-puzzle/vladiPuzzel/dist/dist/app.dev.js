"use strict";

function multi(a, b) {
  return a * b;
}

function addUp(n) {
  var x = 0;

  for (var i = 1; i <= n; i++) {
    x += i;
  }

  return x;
}

console.log(multi(3, 4));
console.log(addUp(10));