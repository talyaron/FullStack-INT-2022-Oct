"use strict";
//1.
var img = document.querySelector("#img");
function getPic() {
    for (var i = 0; i < 5; i++) {
        var image = prompt("Enter URL address");
        if (image) {
            img === null || img === void 0 ? void 0 : img.innerHTML = "<img src='" + image + "'/>";
        }
    }
}
getPic();
