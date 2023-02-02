const btn_Log = document.querySelector(".btn_Login")as HTMLButtonElement;
const form = document.querySelector("form")as HTMLFormElement;
form.addEventListener("submit", runform);

function runform(e){
  let inp_Name = document.querySelector(".inpn") as HTMLInputElement;
  let inp_pass = document.querySelector(".inp_pass") as HTMLInputElement 
  e.preventDefault()
  inp_Name.required 
  inp_pass.required
  localStorage.setItem(inp_Name.value, inp_pass.value)
    window.location.href = "app.html"
    startApp()
  }
  


