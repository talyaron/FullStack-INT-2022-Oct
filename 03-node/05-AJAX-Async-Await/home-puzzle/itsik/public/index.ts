const dog = document.querySelector(".contDog")as HTMLDivElement;
const cat = document.querySelector(".contCat")as HTMLDivElement;
const dogBtn = document.querySelector(".dogResult")as HTMLButtonElement;
const catBtn = document.querySelector(".catResult")as HTMLButtonElement;

dogBtn.addEventListener("click", getDogImage)
catBtn.addEventListener("click", getCatImage)


function getDogImage(){
   
    try {
     fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data =>{
       console.log(data)
       if(dog){
        const ap = data.message
        const dog = document.querySelector(".contDog")!.innerHTML = `<img src="${ap}" width="397" height="397"></img>`
       }

})
    } catch (error) {
        console.error(error)
    }
    
}

function getCatImage(){
fetch(' https://api.thecatapi.com/v1/images/search')
.then(res => res.json())
    .then(data =>{
       console.log(data)
      if(cat){
       const cp = data.url
    //    cat.innerHTML = `<img src="${cp}" width="397" height="397"></img>`;
       const cat = document.querySelector(".contCat")!.innerHTML = `<img src="${cp}" width="397" height="397"></img>`
       }
})

}