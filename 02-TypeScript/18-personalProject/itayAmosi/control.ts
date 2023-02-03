// const rings = document.querySelectorAll(`.hit`) as NodeListOf<HTMLElement>;

// rings.forEach((div) => {
//   div.addEventListener(`click`, (event) => {
//     console.log(div.innerHTML);
//   });
// });

// function handleDisplayImage(event) {
//   let shot = event.target.children[0];
//   shot.src = "./Image-shot.jpeg";
// console.dir(shot);

// }

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
      mosquito.update();
      const randTop = Math.random() * (contWidth - 100);
      const randLeft = Math.random() * (contHeight - 100);

      bee.style.position = "absolute";
      bee.style.top = randTop + "px";
      bee.style.left = randLeft + "px";
    }, 1000);

    const bloodSpot: any = document.querySelector(".bloodSpot");
    window.addEventListener("click", (e) => {
      bloodSpot.style.top = e.pageY + "px";
      bloodSpot.style.left = e.pageX + "px";

      if (e.offsetX == mosquito.positionX + 100 && e.offsetY == mosquito.positionY + 100){ score++;
      startBtn.innerHTML = "SCORE: " +score;
    }else{
      if(e.target === bee)
      score--;
      startBtn.innerHTML = "SCORE: " +score;
      }
    });

  } catch (error) {
    console.error(error);
  }
});

