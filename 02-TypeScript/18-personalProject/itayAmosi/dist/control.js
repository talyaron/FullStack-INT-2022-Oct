var rings = document.querySelectorAll(".hit");
rings.forEach(function (div) {
    div.addEventListener("click", function (event) {
        console.log(div.innerHTML);
    });
});
// function handleDisplayImage(event) {
//   let shot = event.target.children[0];
//   shot.src = "./Image-shot.jpeg";
// console.dir(shot);
// }
var target = document.createElement('.target');
target.setAttribute('target', 'target');
