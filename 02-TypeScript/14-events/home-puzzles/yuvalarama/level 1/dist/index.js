var box = document.querySelector(".box");
// function getRandomColor(){
//     "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
// }
box.addEventListener("click", function () {
    box.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
});
//לשאול את טל לגבי הסימון הכחול על הכתב
