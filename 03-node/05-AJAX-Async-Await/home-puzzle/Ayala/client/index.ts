const button = document.querySelector("#btn");
const images = document.querySelector("#image");


if (button) {
  button.addEventListener("click", () => {
    try {
      const image: HTMLElement | null = document.querySelector("#image");
      if (!image) throw new Error("Couldnt find element image");
      console.log("get image");

      fetch("/random-image")
        .then(response => response.json()) 
        .then(data => {
        
         
          try {
           
            console.log(data);
            
            const { imageUrl } = data;
            
            // image.src = imageUrl;

            // image.innerText = imageUrl;
           

          } catch (error) {
            console.error(error);
          }
        });

      console.log("end");
    } catch (error) {
      console.error(error);
    }
  });
}

function setImageSrc(images: Element | null, imageUrl: string) {
  throw new Error("Function not implemented.");
}

