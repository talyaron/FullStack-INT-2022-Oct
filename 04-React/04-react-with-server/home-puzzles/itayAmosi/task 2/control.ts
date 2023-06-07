function getRandomBalloons(): void {
  try {
    const myBox: HTMLElement | null = document.querySelector('.balloon')
    if (myBox) {
      myBox.addEventListener('click', (event) => {})
    }
    const balloon: any = document.querySelectorAll(`.balloon`)
    balloon.forEach((div) => {
      div.addEventListener('click', (event) => {
        div.style.backgroundColor = getRandomColor()
      })
      div.addEventListener('dblclick', (event) => {
        div.remove(event)
      })
    })
  } catch (error) {}
}
for (let i = 0; i < 33; i++) {
  caterBalloons()
}
const card: any = document.querySelector('.balloon')
function caterBalloons() {
  const balloonSpeed = randomNumber(40, 90)
  const balloonSize = randomNumber(45, getViewportWidth() / 5)
  const balloonPosition = randomNumber(
    0 - balloonSize / 2,
    getViewportWidth() - balloonSize / 2 - 120,
  )
  const randomBalloon = document.createElement(`div`)
  randomBalloon.classList.add(`balloon`)
  randomBalloon.style.left = Math.random() * 950 + 'px'
  randomBalloon.style.top = Math.random() * 250 + 'px'
  randomBalloon.style.backgroundColor = getRandomColor()
  randomBalloon.style.animation = `floatUp ${balloonSpeed}s linear 1, wobble ${randomNumber(
    4,
    12,
  )}s ease-in-out alternate`
  // randomBalloon.addEventListener(`click`, pop);
  document.querySelector(`.wrapper`)?.appendChild(randomBalloon)
  PopUpBalloons.push = function (randomBalloon) {
    throw new Error('Method not implemented.')
  }
  getRandomBalloons()
}
