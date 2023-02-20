"use strict";

// level 2
var button = document.querySelector('button');
var box = document.getElementById("box");
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (event) {
  button.textContent = "click count: " + event.detail;
}); // if (box != undefined) {
//     box.style.backgroundColor = "red";
//   }