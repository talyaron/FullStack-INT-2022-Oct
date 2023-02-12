var scores = 0;
var time = 60;
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
                scores++;
            }
            else if (((_b = e.target) === null || _b === void 0 ? void 0 : _b.className) === "bee") {
                scores--;
            }
            startBtn.innerHTML = "SCORE: " + scores;
        });
    }
    catch (error) {
        console.error(error);
    }
});
function addToLocalStorage(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var age = event.target.elements.age.value;
        var email = event.target.elements.email.value;
        var score = event.target.elements.email.value;
        event.target.reset();
        users.push(new User(name, age, email, scores));
        if (!itemsRoot)
            throw new Error("itemsRoot is null");
        renderUsers(users, "itemsRoot");
    }
    catch (error) {
        console.error(error);
    }
}
function renderUsers(users, renderElementId) {
    try {
        if (!users || !Array.isArray(users))
            throw new Error("users is not an array");
        var html = users
            .map(function (users) {
            return "<ul>\n          <li>" + users.name + " <br> -- " + users.age + " -- " + users.email + " -- score: " + users.score + "</li> </ul>\n      ";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("couldent find element ");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function saveTolocalStorge() {
    localStorage.setItem("users", JSON.stringify(users));
}
0;
function btnAppears() {
    var start = document.getElementById("start");
    start.style.display = "block";
}
