

const root: HTMLDivElement|null= document.querySelector(`#root`);

if (root){
    console.dir(root);
    root.style.backgroundColor = getRandomColor();
}



function getRandomDice() {
  const randomImage = Math.floor(Math.random() * arr.length);
  document.querySelector("#dice") = myPix[randomImage];

  

const box: HTMLDivElement|null= document.querySelector(`.box`);

if (box){
    console.dir(box);
    box.style.backgroundColor = `black`;
}