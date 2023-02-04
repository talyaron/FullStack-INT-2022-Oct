
let score = 0;

const startBtn: any = document.querySelector(".startBtn");
startBtn.addEventListener(`click`, () => {
  try {
    if (!container) throw new Error("error");

    const bee = document.createElement("img");
    container.appendChild(bee);
    bee.setAttribute("class", "bee");
    bee.setAttribute(
      "src",
      "https://www.freepnglogos.com/uploads/bee-png/bee-the-economic-value-pollination-modern-agriculture-8.png"
    );

    const contWidth = container.offsetWidth;
    const contHeight = container.offsetHeight;

    setInterval(() => {
      const elem = document.querySelector(".mosquito") as HTMLElement;

      mosquito.update();

      const randTop = Math.random() * (contWidth - 100);
      const randLeft = Math.random() * (contHeight - 100);

      bee.style.position = "absolute";
      bee.style.top = randTop + "px";
      bee.style.left = randLeft + "px";
      elem.remove();
    }, 1000);

    const bloodSpot: any = document.querySelector(".bloodSpot");
    window.addEventListener("click", (e) => {
      bloodSpot.style.top = e.pageY + "px";
      bloodSpot.style.left = e.pageX + "px";
      // console.log(e.target.className)
      if (e.target!.className  === `mosquito`) {
        score++;
        startBtn.innerHTML = "SCORE: " + score;
      } else {
        if (e.target === bee) score--;
        startBtn.innerHTML = "SCORE: " + score;
      }
    });
  } catch (error) {
    console.error(error);
  }
});
