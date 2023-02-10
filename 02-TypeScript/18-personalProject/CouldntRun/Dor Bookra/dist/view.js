var birdCardContainer = document.querySelector("#birdCardContainer");
var form = document.querySelector("#form");
var areaForm = document.querySelector("#areaForm");
var resetSearch = document.querySelector("#resetSearch");
function hideUnhide(ev) {
    var form = document.getElementById("form");
    var form2 = document.getElementById("areaForm");
    if (form.style.display === "none") {
        form.style.display = "flex";
        form2.style.display = "none";
    }
    else {
        form.style.display = "none";
    }
}
function hideUnhide2(ev) {
    var form = document.getElementById("form");
    var form2 = document.getElementById("areaForm");
    if (form2.style.display === "none") {
        form2.style.display = "flex";
        form.style.display = "none";
    }
    else {
        form2.style.display = "none";
    }
}
