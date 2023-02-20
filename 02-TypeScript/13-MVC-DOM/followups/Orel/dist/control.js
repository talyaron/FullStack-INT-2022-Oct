"use strict";
const boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    if (index % 3 === 0) {
        box.style.backgroundColor = "green";
    }
    else if (index % 2 === 0) {
        box.style.backgroundColor = "red";
    }
    else {
        box.style.backgroundColor = "gray";
    }
});
