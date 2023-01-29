function getRandomColor(): string {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const getViewportWidth = () => {
  return parseInt(getComputedStyle(document.body, null).width, 10)
}
