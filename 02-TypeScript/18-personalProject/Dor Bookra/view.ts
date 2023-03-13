const birdCardContainer = document.querySelector("#birdCardContainer");
const itemCardContainer = document.querySelector("#itemCardContainer");
const form = document.querySelector("#form");
const itemForm = document.querySelector(".itemForm");

function hideUnhide(ev){
  
    var form = document.getElementById("form")!;
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  } 

function hideUnhide2(ev){

    var form = document.getElementById("itemForm")!;
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  } 

  