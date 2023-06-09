function getRandomColor() {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
}
