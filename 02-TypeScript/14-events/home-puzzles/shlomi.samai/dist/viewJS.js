const Boxes = document.querySelectorAll('.box4');
Boxes.forEach((box4) => {
    if (Boxes) {
        box4.addEventListener("click", myEvent2);
    }
    function myEvent2() {
        if (Boxes) {
            box4.innerHTML = `<div class='box5'>
   </div>`;
        }
    }
});
