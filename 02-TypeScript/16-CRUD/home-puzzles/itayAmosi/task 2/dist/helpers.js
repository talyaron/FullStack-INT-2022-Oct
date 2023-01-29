function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var getViewportWidth = function () {
    return parseInt(getComputedStyle(document.body, null).width, 10);
};
