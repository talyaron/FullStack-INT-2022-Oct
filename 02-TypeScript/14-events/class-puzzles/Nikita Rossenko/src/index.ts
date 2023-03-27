let dragged;

/* events fired on the draggable target */
const source:any = document.querySelector("#draggable");
source.addEventListener("drag", (event) => {
});

source.addEventListener("dragstart", (event) => {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});

/* events fired on the drop targets */
const target:any = document.querySelectorAll("#droptarget");
target.forEach(element => {
    
    element.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
    }, false);

    element.addEventListener("dragenter", (event) => {
    // highlight potential drop target when the draggable element enters it
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.add("dragover");
    }
    });

    element.addEventListener("dragleave", (event) => {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
    }
    });

    element.addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged element to the selected drop target
    if (event.target.classList.contains("dropzone")) {
        event.target.classList.remove("dragover");
        event.target.appendChild(dragged);
    }
    });

});
