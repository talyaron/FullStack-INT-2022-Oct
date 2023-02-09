const birdCardContainer = document.querySelector("#birdCardContainer");
const form = document.querySelector("#form");
const areaForm = document.querySelector("#areaForm");

function hideUnhide(ev){
  
    var form = document.getElementById("form")!;
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  } 

function hideUnhide2(ev){

    var form = document.getElementById("areaForm")!;
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  } 

  