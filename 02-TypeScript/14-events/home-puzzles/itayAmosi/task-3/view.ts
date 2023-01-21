const xo = document.querySelector(`.box`)
if (xo) {
 xo.addEventListener(`click`,(play) => {
    console.log(play)
 });{

}}


const XO = document.querySelectorAll(`.box`);

// XO.forEach((box) =>{
// box.addEventListener(`click`, (Event)=>{
// box.innerText = `X`);

// }



XO.forEach((box:any) => {
   box.addEventListener("click", (event) => {
     box.innerText = `X`;
   });
   box.addEventListener("click", (event) => {
      box.innerText = `O`;
   });
//    box.addEventListener("mouseout", (event) => {
//      box.style.backgroundColor = 'teal';
//    });
 });