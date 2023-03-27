interface news {
    name:string;
    article:string;
    id:number;
}


const imageClick = document.querySelectorAll(".main__container");

if(imageClick){
    imageClick.forEach((img, index)=>{
        img.addEventListener("click", ()=>{
            getArticels(index)
        })
        
    })
}


function getArticels(index){
    try {
     fetch("/articles") 
     .then(res=> res.json())
     .then 
        
    } catch (error) {
       console.error(error) 
    }
}