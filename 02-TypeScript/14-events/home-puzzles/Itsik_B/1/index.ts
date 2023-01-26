function startIt(){
    let creatBox = document.createElement("div") as HTMLDivElement;   
    document.body.appendChild(creatBox);
    creatBox.innerHTML = "click me"
    creatBox.addEventListener("click", ()=>{
        return alert("This Box Is Been Clicked")
     })
     creatBox.addEventListener("mouseover", ()=>{
       let newpop = document.createElement("p")as HTMLParagraphElement;
       creatBox.appendChild(newpop)
       newpop.innerHTML = "You Hover Me"
       creatBox.addEventListener("mouseleave", ()=>{
           creatBox.removeChild(newpop)
       })
    })  
   
   
   
   
   
   }