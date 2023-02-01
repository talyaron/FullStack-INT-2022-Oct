const rings = document.querySelectorAll(`.hit`) as NodeListOf<HTMLElement>;

rings.forEach((div) => {
  div.addEventListener(`click`, (event) => {
    console.log(div.innerHTML)
  });
});


// function handleDisplayImage(event) {
//   let shot = event.target.children[0];
//   shot.src = "./Image-shot.jpeg";
// console.dir(shot);
  
// }


const target = document.createElement('.target');
target.setAttribute('target', 'target');




