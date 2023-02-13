"use strict";

function store() {
  //stores items in the localStorage
  var name = document.getElementById('name').value;
  var user = {
    name: name
  };
  localStorage.setItem('name', JSON.stringify(user)); //converting object to string
}

onload = function onload() {
  //ensures the page is loaded before functions are executed.
  document.getElementById("login").onsubmit = store;
};