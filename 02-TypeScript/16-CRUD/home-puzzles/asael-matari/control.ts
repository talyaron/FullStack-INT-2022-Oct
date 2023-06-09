

function creatBubbles()   {
    const bubbles = document.querySelector(".bubbles");
    const span = document.createElement("span");
    var size = Math.random() * 60;

  span.style.width = 20 +size + "px";
  span.style.height = 20 + size + "px";
  span.style.left = Math.random() * innerWidth + "px";
  bubbles?.appendChild(span);

  setTimeout(() => {
    span.remove();
  },5000)
}
setInterval(creatBubbles,50)


