"use strict";

function averageAge(person1, person2) {
  return (person1.age + person2.age) / 2;
}

var form = document.querySelector('form');
var person1AgeInput = document.getElementById('person1-age');
var person2AgeInput = document.getElementById('person2-age');
var resultElement = document.getElementById('result');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var person1 = {
    age: Number(person1AgeInput.value)
  };
  var person2 = {
    age: Number(person2AgeInput.value)
  };
  resultElement.innerText = averageAge(person1, person2).toString();
});