let playerLives = 10;

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCard = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  if (flippedCard.length === 2) {
    if (
      flippedCard[0].getAttribute("name") ===
      flippedCard[1].getAttribute("name")
    ) {
      console.log("match");

      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.add("reversedCard");
      });
    } else {
      console.log("worng");
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 2000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives.toString();
      console.log(playerLives);
      if (playerLives === 0) {
        gameOver.play();
        const loses: any = document.querySelector(".loses") as HTMLDivElement;
        loses.style.display = "block";
        loses.style.display = "flex";

        restart();
      }
    }
  }
  if (toggleCard.length === 16) {
    const winer: any = document.querySelector(".Winner") as HTMLDivElement;
    songWin.play();
    winer.style.display = "block";
    winer.style.display = "flex";
  }
};

const restart = () => {
  let cardD = randomize();
  let faces: any = document.querySelectorAll(".fase");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardD.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].classList.add("new_game");
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 10;
  playerLivesCount.textContent = playerLives.toString();
  setTimeout(() => {}, 100);
};

playerLivesCount.textContent = playerLives.toString();
