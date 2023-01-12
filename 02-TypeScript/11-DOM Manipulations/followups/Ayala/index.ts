console.dir(document);
const btn = document.querySelector("#btn");
function generateColor(){
 const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
 let code = "";
 for(let i=0; i<6; i++){
  code += hexArray[Math.floor(Math.random()*15)];
 }
 return `#${code}`
}


  btn.addEventListener('click', () => {
  document.body.style.backgroundColor = generateColor();
})











