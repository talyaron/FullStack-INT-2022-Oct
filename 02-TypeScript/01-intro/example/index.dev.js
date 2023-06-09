"use strict";

var boxs = document.querySelectorAll('.box');
console.log(boxs);
boxs.forEach(function (box) {
  box.addEventListener('click', function () {
    box.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}