var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var bigAd = document.getElementById("bigAd");
canvas.width = window.innerWidth / 1.2;
canvas.height = window.innerHeight / 1.5;
document.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
