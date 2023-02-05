var score = 0;
var time = 5;
var startBtn = document.querySelector(".startBtn");
var removeAnimalFromScreen = function (className) {
    var elem = document.querySelector(className);
    elem === null || elem === void 0 ? void 0 : elem.remove();
};
startBtn.addEventListener("click", function () {
    try {
        if (!container)
            throw new Error("could not find container");
        var timer_1 = setInterval(function () {
            var scoreBorders = document.querySelector(".scoreboard");
            var timer = document.querySelector(".timer");
            timer.innerHTML = "TIME: " + time;
            time--;
            if (time === 0) {
                timer.innerHTML = "TIME: 0";
                scoreBorders.style.display = "block";
            }
        }, 1000);
        var mosquitoInterval_1 = setInterval(function () {
            var elem = document.querySelector(".mosquito");
            mosquito.update();
            elem.remove();
        }, 1000);
        var beeInterval_1 = setInterval(function () {
            var elem = document.querySelector(".bee");
            bee.update();
            elem.remove();
        }, 1000);
        setInterval(function () {
            if (time === 0) {
                clearInterval(mosquitoInterval_1);
                clearInterval(beeInterval_1);
                clearInterval(timer_1);
                removeAnimalFromScreen(".bee");
                removeAnimalFromScreen(".mosquito");
            }
        }, 1000);
        var bloodSpot_1 = document.querySelector(".bloodSpot");
        window.addEventListener("click", function (e) {
            var _a, _b;
            bloodSpot_1.style.top = e.pageY + "px";
            bloodSpot_1.style.left = e.pageX + "px";
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.className) === "mosquito") {
                score++;
            }
            else if (((_b = e.target) === null || _b === void 0 ? void 0 : _b.className) === "bee") {
                score--;
            }
            startBtn.innerHTML = "SCORE: " + score;
        });
    }
    catch (error) {
        console.error(error);
    }
});
// const rules: any = document.querySelector("#rules");
// rules.addEventListener(`click`, () => {
// try {
//   if(rules){
//     rules.innerHTML = `<div class="card">
//         <h1>This is's site</h1>
//     </div>`;
// }
// } catch (error) {
// }
// });
