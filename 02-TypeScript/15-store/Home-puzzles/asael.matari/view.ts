const img=document.getElementById("img")
const input=document.getElementById("input")
img?.addEventListener("click",()=>{
    if(input)
    input.type= input.type==="password"?"text":"password"
})

const container=document.querySelector("container")

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }