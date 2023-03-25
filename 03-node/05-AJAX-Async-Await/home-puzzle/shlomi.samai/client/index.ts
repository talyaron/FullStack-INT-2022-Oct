const button=document.querySelector("#btn")

if (button){
button.addEventListener("click",()=>{
try {
    console.log('test')
    const result:HTMLElement|null= document.querySelector('#result')
    if (!result) throw new Error("couldnt find result");
    
   fetch("/randomPicture")
  .then((response) => response.json())
  .then((data) =>{
    console.log(data)
    result.innerHTML=`<img src=${data} alt="">`
})

} catch (error) {
    console.error(Error)
}
})
}

