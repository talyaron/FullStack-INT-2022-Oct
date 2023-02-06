var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bigAd = document.getElementById("bigAd");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7;
document.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;
};
