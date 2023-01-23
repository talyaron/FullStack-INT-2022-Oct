
// get all the boxes
let boxes = document.querySelectorAll(".boxes");
boxes.forEach((box:any) => {
    box.addEventListener("mouseover", ()=>{
     box.style.backgroundColor ="gold"; 
      })
       
     box.addEventListener("mouseout", ()=>{
       box.style.backgroundColor = "black"
     }) 
       
 
});        

// use mousein / mouseout on box .one
const numone = document.querySelector("#one")as HTMLDivElement;
numone.addEventListener("mouseover", (event)=>{
   
numone.style.backgroundColor = "red";
numone.addEventListener("mouseout", ()=>{
    numone.style.backgroundColor = "black";
})
})

