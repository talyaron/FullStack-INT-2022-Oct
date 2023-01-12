

const root: HTMLDivElement|null= document.querySelector(`#root`);

if (root){
    console.dir(root);
    root.style.backgroundColor = getRandomColor();
}



function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }

  

const box: HTMLDivElement|null= document.querySelector(`.box`);

if (box){
    console.dir(box);
    box.style.backgroundColor = `black`;
}