function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomColor() {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
}
