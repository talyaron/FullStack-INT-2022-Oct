const section = document.querySelector("section") as HTMLElement;
const playerLivesCount = document.querySelector("span") as HTMLSpanElement;

const randomize = () => {
  const carData = getData();
  carData.sort(() => Math.random() - 0.5);
  console.log(carData);
  return carData;
};

randomize();

const catdGenrator = () => {
  const cardData = randomize();

  //html
  cardData.forEach((item) => {
    const card: any = document.createElement("div");
    const fase: any = document.createElement("img");
    const back: any = document.createElement("div");
    card.classList = "card";
    fase.classList = "fase";
    back.classList = "back";
    //add img
    fase.src = item.imgSrc;
    card.setAttribute("name", item.name);

    // add div
    section.appendChild(card);
    // add to div back && fase
    card.appendChild(fase);
    card.appendChild(back);

    //rotate card
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
      enterdiv.play();
    });
  });
};

const ChangerColor = (event) => {
  var colorBody = event.target.value;
  document.body.style.background = `linear-gradient( 45deg, ${colorBody} 26.8%, rgba(192,229,246,1) 64% )`;
};
const ChangerColor2 = (event) => {
  const colorleft = (document.querySelector(".left") as HTMLInputElement).value;
  const colorBody2 = event.target.value;
  console.log(colorBody2);
  document.body.style.background = `linear-gradient( 45deg,${colorleft}  26.8%,  ${colorBody2} 64%)`;
};
