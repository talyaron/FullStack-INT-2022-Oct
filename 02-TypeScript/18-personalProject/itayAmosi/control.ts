let score = 0;
let time = 60;

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

function addToLocalStorage(event: any) {
  try {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const age = event.target.elements.age.value;
    const email = event.target.elements.email.value;
    event.target.reset();
    users.push(new User(name, age, email, score));
    console.log(users);
    if (!itemsRoot) throw new Error("itemsRoot is null");
    renderUsers(users, "itemsRoot");
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users: User[], renderElementId: string): void {
  try {
    if (!users || !Array.isArray(users))
      throw new Error("users is not an array");

    const html = users
      .map((users) => {
        return `
          <li>*${users.name} <br> *33 *${users.email} *${users.score}</li> 
      `;
      })
      .join(` `);
    const element = document.querySelector(`#${renderElementId}`);
    if (!element) throw new Error(`couldent find element `);
    element.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function saveTolocalStorge() {
  localStorage.setItem(`users`, JSON.stringify(users));
}


function btnAppears() {
  const start: any = document.getElementById("start");
  start.style.display = "block";

}