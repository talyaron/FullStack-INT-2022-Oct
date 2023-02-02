const welcomeH1 = document.querySelector(".targ")as HTMLHeadElement;

function startApp(){
 
  const firstName = (JSON.parse(localStorage.getItem("userName")!))
   const password = (JSON.parse  (localStorage.getItem("userPass")!));
 
     welcomeH1.textContent = "welcome" + firstName;

    

}