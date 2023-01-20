var dragged;
/* events fired on the draggable target */
var source = document.querySelector("#draggable");
source.addEventListener("drag", function (event) {
});
source.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.classList.add("dragging");
});
source.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.classList.remove("dragging");
});
/* events fired on the drop targets */
var target = document.querySelectorAll("#droptarget");
target.forEach(function (element) {
    element.addEventListener("dragover", function (event) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);
    element.addEventListener("dragenter", function (event) {
        // highlight potential drop target when the draggable element enters it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.add("dragover");
        }
    });
    element.addEventListener("dragleave", function (event) {
        // reset background of potential drop target when the draggable element leaves it
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.remove("dragover");
        }
    });
    element.addEventListener("drop", function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if (event.target.classList.contains("dropzone")) {
            event.target.classList.remove("dragover");
            event.target.appendChild(dragged);
        }
    });
});
