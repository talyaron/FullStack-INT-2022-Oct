//tesk 1

function addImage() {
    try {
      const picture: HTMLHeadingElement | null = document.querySelector(
        '#picture',
      )
      console.dir(picture)
      let urlImage: any = prompt(`Enter image please`)
  
      
        if (picture && urlImage)
        for (let i = 0; i < 5; i++) {
            var img = document.createElement("img");
            img.src = urlImage;
            document.body.appendChild(img);
          }
          
      
    } catch (error) {
      console.error(error)
      return false
    }
  }
  addImage()
  console.log(addImage)


  