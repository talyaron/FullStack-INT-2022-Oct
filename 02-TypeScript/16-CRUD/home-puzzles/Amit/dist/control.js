var score = 0;
function shoot(uid) {
    try {
        var index = balloonsArray.findIndex(function (balloon) { return balloon.uid === uid; });
        if (index !== undefined && index > -1) {
            var balloon = document.querySelector("#" + uid);
            if (balloon) {
                var clickCounter = 0;
                if (balloon.innerText === "2")
                    clickCounter = 1;
                if (balloon.innerText === "1")
                    clickCounter = 2;
                balloon.style.backgroundColor = "red";
                balloon.innerText = "" + (2 - clickCounter);
                if (balloon.innerText === "0") {
                    balloonsArray.splice(index, 1);
                    balloon.remove();
                    score += 10;
                    if (scoreOnScreen)
                        scoreOnScreen.innerText = "SCORE: " + score;
                }
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function endlessBaloonsCreator() {
    var _a;
    try {
        balloonsArray.push(new Balloon);
        (_a = document.querySelector("#wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(renderNewBalloon());
        randomLocation();
    }
    catch (error) {
        console.error(error);
    }
}
function renderNewBalloon() {
    try {
        var _loop_1 = function (i) {
            var balloon = document.createElement("div");
            var balloonUid = balloonsArray[i].uid;
            balloon.id = balloonUid;
            balloon.className = "balloon";
            balloon.innerText = "2";
            balloon.addEventListener("click", function () { shoot(balloonUid); });
            balloon.addEventListener("animationstart", function () {
                balloon.animate(fly, flyTiming);
            });
            return { value: balloon };
        };
        for (var i = balloonsArray.length - 1; i < balloonsArray.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function randomLocation() {
    try {
        var wrapper = document.querySelector("#wrapper");
        var wrapperLastChild = wrapper === null || wrapper === void 0 ? void 0 : wrapper.lastElementChild;
        var xAxisWidth = 1000;
        var randomLeft = void 0;
        if (wrapperLastChild && wrapper) {
            randomLeft = getRandomNumber(0, xAxisWidth);
            wrapperLastChild.style.left = randomLeft + "px";
            wrapperLastChild.style.backgroundColor = getRandomColor();
        }
        ;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var fly = [
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-2000px)' },
];
var flyTiming = {
    duration: 10000,
    iterations: 1
};
