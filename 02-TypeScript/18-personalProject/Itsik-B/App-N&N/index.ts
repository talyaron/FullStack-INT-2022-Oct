const form = document.querySelector("form")as HTMLFormElement;
form.addEventListener("submit", runform)!;
let inp_Name = document.querySelector(".inpn") as HTMLInputElement;
  let inp_pass = document.querySelector(".inp_pass") as HTMLInputElement;

  
  function runform(e){
  e.preventDefault()
  inp_Name.required 
  inp_pass.required
  const inp_NameValue = inp_Name.value;
  const inp_passValue = inp_pass.value;

   localStorage.setItem("userName", JSON.stringify(inp_NameValue));
   localStorage.setItem("userPass", JSON.stringify(inp_passValue));
 
    window.location.href = "app.html"
    startApp()
  }
  


