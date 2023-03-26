interface news {
    name:string;
    article:string;
}


const imageClick = document.querySelectorAll(".main__container same");
if(imageClick){
    imageClick.forEach((img)=>{
        img.addEventListener("click", ()=>{
            console.log("asdasd")
        })
        
    })
}