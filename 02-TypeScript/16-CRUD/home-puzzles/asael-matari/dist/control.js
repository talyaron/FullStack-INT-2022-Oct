function creatBubbles() {
    var bubbles = document.querySelector(".bubbles");
    var span = document.createElement("span");
    var size = Math.random() * 60;
    span.style.width = 20 + size + "px";
    span.style.height = 20 + size + "px";
    span.style.left = Math.random() * innerWidth + "px";
    bubbles === null || bubbles === void 0 ? void 0 : bubbles.appendChild(span);
    setTimeout(function () {
        span.remove();
    }, 5000);
}
setInterval(creatBubbles, 50);
