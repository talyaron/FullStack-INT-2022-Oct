"use strict";

var form = document.querySelector("registration-form");
var namNodeListOftype = document.querySelectorAll("name");

function handleAddItem(ev) {
  try {
    ev.preventDefault();
    var name = ev.target.elements.name.value;
    var city = ev.target.elements.city.value;
    var email = ev.target.elements.email.value;
    var phone = ev.target.elements.phone.valueAsNumber;
    var password = ev.target.elements.password.value;
    var color = ev.target.elements.color.value;
    var form_1 = new Form(name, city, email, phone, password, color);
    forms.push(form_1);
    console.log(form_1); //ev.target.reset()
  } catch (error) {
    console.error(error);
  }
}