"use strict";

var incrementBtn = document.getElementById('increment-btn');
var amount = document.getElementById("count");
var resetBtn = document.getElementById("reset-btn");
var count = 0;
incrementBtn.addEventListener('click', function () {
  count++;
  amount.textContent = count;
  console.log(count);
});
resetBtn.addEventListener('click', function () {
  count = 0;
  amount.textContent = count;
  console.log(count);
});