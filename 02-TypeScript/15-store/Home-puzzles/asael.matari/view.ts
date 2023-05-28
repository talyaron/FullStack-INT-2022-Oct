const img=document.getElementById("img")
const input=document.getElementById("input")
img?.addEventListener("click",()=>{
    if(input)
    input.type= input.type==="password"?"text":"password"
})