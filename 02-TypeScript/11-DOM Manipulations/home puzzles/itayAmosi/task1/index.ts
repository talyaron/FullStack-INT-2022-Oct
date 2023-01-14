function addImage() {
  try {
    const picture: HTMLHeadingElement | null = document.querySelector(
      '#picture',
    )
    console.dir(picture)
    let urlImage: any = prompt(`Enter image please`)

    
      if (picture && urlImage)
      for (let i = 0; i < 5; i++) {
        picture.innerHTML= `<div class="imagebox">
        <img src='${urlImage}'/>
        </div>`
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
addImage()
console.log(addImage)
