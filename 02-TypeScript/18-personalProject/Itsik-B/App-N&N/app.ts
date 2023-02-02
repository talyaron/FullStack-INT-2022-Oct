const welcomeH1 = document.querySelector(".targ")as HTMLHeadElement;
startApp()
const todo = document.querySelector(".todo")as HTMLDivElement;

function startApp(){
 
  const firstName = (JSON.parse(localStorage.getItem("userName")!))
   const password = (JSON.parse  (localStorage.getItem("userPass")!));
 
     welcomeH1.textContent = "welcome "+firstName;
      // renderNav()
     
    }

// function renderNav(){

//    const newc = document.querySelector(".newC")as HTMLDivElement;
//    const dairy = document.querySelector(".dairy")as HTMLDivElement;
//    const clinet = document.querySelector(".clinet")as HTMLDivElement;
//    const mlay = document.querySelector(".mlay")as HTMLDivElement;
//    const sapak = document.querySelector(".spak")as HTMLDivElement;
   
   
//   // reder all the page from here
   
//   // todolist
  

// }


function todolist(){
 
  const addme = document.querySelector(".addMession")as HTMLInputElement;
  const btnM = document.querySelector("#btnadd")as HTMLButtonElement;
 const padd = document.querySelector(".pAdd")as HTMLDivElement;
 
 btnM.addEventListener("click", ()=>{
    let newP = document.createElement("p")as HTMLParagraphElement;
    padd.appendChild(newP);
    newP.innerHTML = addme.value
    

 })

   

}