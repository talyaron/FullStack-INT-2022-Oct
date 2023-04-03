"use strict";

var nameInput = document.querySelector("#name");
var adressInput = document.querySelector("#adress");
var cityInput = document.querySelector("#city");
var areaInput = document.querySelector("#area");
var animalInput = document.querySelector("#animal");
var smokeInput = document.querySelector("#smoke");
var floorInput = document.querySelector("#floor");
var roomsInput = document.querySelector("#rooms");
var partersNoInput = document.querySelector("#partersNo");
var priceInput = document.querySelector("#price");
var imgSrcInput = document.querySelector("#imgSrc");
var submitButton = document.querySelector("#myButton");

if (submitButton) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    var newUser = new User(nameInput.value, "123");
    newUser.setDetails({
      name: nameInput.value,
      address: adressInput.value,
      city: cityInput.value,
      area: areaInput.value,
      animal: animalInput.value,
      smoke: smokeInput.value,
      floor: floorInput.value,
      rooms: roomsInput.value,
      partersNo: partersNoInput.value,
      price: priceInput.value,
      imgSrc: imgSrcInput.value
    });
    users.push(newUser);
    UserProfilList.push(newUser);
    localStorage.setItem("UserProfilList", JSON.stringify(UserProfilList));
    nameInput.value = "";
    adressInput.value = "";
    cityInput.value = "";
    areaInput.value = "";
    animalInput.value = "";
    smokeInput.value = "";
    floorInput.value = "";
    roomsInput.value = "";
    partersNoInput.value = "";
    priceInput.value = "";
    imgSrcInput.value = "";
  });
  submitButton.addEventListener("click", function () {
    window.location.assign('../homepage/homepage.html');
  });
} // retrieve data from local storage


var storedData = localStorage.getItem("UserProfilList"); // console.log("storedData")
// console.log(storedData)

if (storedData) {
  UserProfilList = JSON.parse(storedData);
}