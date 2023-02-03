// const rings = document.querySelectorAll(`.hit`) as NodeListOf<HTMLElement>;
// rings.forEach((div) => {
//   div.addEventListener(`click`, (event) => {
//     console.log(div.innerHTML);
//   });
// });
// function handleDisplayImage(event) {
//   let shot = event.target.children[0];
//   shot.src = "./Image-shot.jpeg";
// console.dir(shot);
// }
var score = 0;
var startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", function () {
    try {
        if (!container)
            throw new Error("error");
        var bee_1 = document.createElement("img");
        container.appendChild(bee_1);
        bee_1.setAttribute("class", "bee");
        bee_1.setAttribute("src", "https://www.freepnglogos.com/uploads/bee-png/bee-the-economic-value-pollination-modern-agriculture-8.png");
        var contWidth_1 = container.offsetWidth;
        var contHeight_1 = container.offsetHeight;
        setInterval(function () {
            mosquito.update();
            var randTop = Math.random() * (contWidth_1 - 100);
            var randLeft = Math.random() * (contHeight_1 - 100);
            bee_1.style.position = "absolute";
            bee_1.style.top = randTop + "px";
            bee_1.style.left = randLeft + "px";
        }, 1000);
        var bloodSpot_1 = document.querySelector(".bloodSpot");
        window.addEventListener("click", function (e) {
            bloodSpot_1.style.top = e.pageY + "px";
            bloodSpot_1.style.left = e.pageX + "px";
            if (e.offsetX == mosquito.positionX + 100 && e.offsetY == mosquito.positionY + 100) {
                score++;
                startBtn.innerHTML = "SCORE: " + score;
            }
            else {
                if (e.target === bee_1)
                    score--;
                startBtn.innerHTML = "SCORE: " + score;
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
