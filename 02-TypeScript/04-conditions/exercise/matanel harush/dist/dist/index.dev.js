"use strict";

var passwordForm = document.querySelector("#passwordForm");
var passwordInput = document.querySelector("#passwordInput");
passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var password = passwordInput.value;

  if (password === "opensesame") {
    console.log("You got all the gold in the cave!");
  } else {
    console.log("Wrong Password!");
    alert("Wrong Password!");
  }
});