const imageArray: string[] = [`1.jpeg`, `2.jpeg`, `3.jpeg`];

function get_random_image(): void {
  const random_index: number = Math.floor(Math.random() * imageArray.length);
  const selected_image: string = imageArray[random_index];
  const image_shower: HTMLImageElement | null = document.getElementById('image_shower') as HTMLImageElement;
  if (image_shower) {
    image_shower.src = `./imeges/${selected_image}`;
  }
}