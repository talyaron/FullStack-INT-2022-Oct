let score = 0;
let time = 5;

const startBtn: any = document.querySelector(".startBtn");
const removeAnimalFromScreen = (className: string) => {
  const elem = document.querySelector(className) as HTMLElement;
  elem?.remove();
};
startBtn.addEventListener(`click`, () => {
  try {
    if (!container) throw new Error("could not find container");
    const timer = setInterval(() => {
      const scoreBorders: any = document.querySelector(".scoreboard");
      const timer: any = document.querySelector(".timer");
      timer.innerHTML = "TIME: " + time;
      time--;
      if (time === 0) {
        timer.innerHTML = "TIME: 0";
        scoreBorders.style.display = "block";
      }
    }, 1000);
    const mosquitoInterval = setInterval(() => {
      const elem = document.querySelector(".mosquito") as HTMLElement;

      mosquito.update();

      elem.remove();
    }, 1000);

    const beeInterval = setInterval(() => {
      const elem = document.querySelector(".bee") as HTMLElement;

      bee.update();
      elem.remove();
    }, 1000);
    setInterval(() => {
      if (time === 0) {
        clearInterval(mosquitoInterval);
        clearInterval(beeInterval);
        clearInterval(timer);
        removeAnimalFromScreen(".bee");
        removeAnimalFromScreen(".mosquito");
      }
    }, 1000);

    const bloodSpot: any = document.querySelector(".bloodSpot");
    window.addEventListener("click", (e) => {
      bloodSpot.style.top = e.pageY + "px";
      bloodSpot.style.left = e.pageX + "px";
      if (e.target?.className === `mosquito`) {
        score++;
      } else if (e.target?.className === `bee`) {
        score--;
      }
      startBtn.innerHTML = "SCORE: " + score;
    });
  } catch (error) {
    console.error(error);
  }
});

// const rules: any = document.querySelector("#rules");
// rules.addEventListener(`click`, () => {
// try {
//   if(rules){
//     rules.innerHTML = `<div class="card">
//         <h1>This is's site</h1>
//     </div>`;
// }
// } catch (error) {

// }
// });
