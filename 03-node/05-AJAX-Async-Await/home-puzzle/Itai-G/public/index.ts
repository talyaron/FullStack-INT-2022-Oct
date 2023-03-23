const imageArray: string[] = [`1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`];

function getImage(): void {
  const randomIndex: number = Math.floor(Math.random() * imageArray.length);
  const selectedImage: string = imageArray[randomIndex];
  const imageShower: HTMLImageElement | null = document.getElementById('imageShower') as HTMLImageElement;
  if (imageShower) {
    imageShower.src = `./imeges/${selectedImage}`;
  }
}