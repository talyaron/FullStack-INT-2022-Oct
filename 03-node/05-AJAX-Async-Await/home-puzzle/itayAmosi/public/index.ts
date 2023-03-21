const btn = document.querySelector(`#btn`);

if (btn) {
  btn.addEventListener("click", () => {
    try {
      const body = document.querySelector(`body`);

      fetch("/random-colors") //promise
        .then((response) => response.json())
        .then((data) => {
          const randomColors = data[`randomColors`];
          console.log(randomColors);
          if (!randomColors) throw new Error("No random colors");
          if (!body) throw new Error("No body");
          body.style.backgroundColor = `#${randomColors}`;
        });
    } catch (error) {
      console.error(error);
    }
  });
}

const imageArray: string[] = [`1.jpeg`, `2.jpeg`, `3.jpeg`, `4.jpeg`, `5.jpeg`, `6.jpeg`];

function get_random_image(): void {
  const random_index: number = Math.floor(Math.random() * imageArray.length);
  const selected_image: string = imageArray[random_index];
  const image_shower: HTMLImageElement | null = document.getElementById('image_shower') as HTMLImageElement;
  if (image_shower) {
    image_shower.src = `./images/${selected_image}`;
  }
}