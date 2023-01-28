var wrapper = document.querySelector(".playground");
var tinkAudio = document.querySelector("#tinkSound");
var clapAudio = document.querySelector("#clapSound");
var midScreenX = window.innerWidth / 2;
var midScreenY = window.innerHeight / 2;
var randomDirection = function () {
    if (Math.random() > 0.5) {
        return 1;
    }
    else {
        return -1;
    }
};
