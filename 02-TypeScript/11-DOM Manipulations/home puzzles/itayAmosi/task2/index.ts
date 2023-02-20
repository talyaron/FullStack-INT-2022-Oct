// task2

function addImage() {
  try {
    const picture: HTMLHeadingElement | null = document.querySelector(
      '#picture',
    )
    console.dir(picture)
    if (picture)
      for (let i = 0; i < 5; i++) {
        let urlImage: any = prompt(`Enter image please`)
        const img = document.createElement('img')
        img.src = urlImage
        document.body.appendChild(img)
      }
  } catch (error) {
    console.error(error)
    return false
  }
}
addImage()
console.log(addImage)
