const button = document.querySelector("#btn");
const images = document.querySelector("#image");



if (button) {
  button.addEventListener("click", () => {
    try {
      const result: HTMLElement | null = document.querySelector("#result");
      if (!result) throw new Error("Couldnt find element result");
      console.log("get image");

      fetch("/random-image")
        .then(response => response.json()) 
        .then(data => {
          const imageUrl = new URL(data.imageUrl, window.location.origin).href;
          // image.src = data.imageUrl;
         
          try {
           
            console.log(data);
            const { imageUrl } = data;
            
            // Image.src = const HTMLImge;
            let Image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement

            result.innerText = imageUrl;
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

