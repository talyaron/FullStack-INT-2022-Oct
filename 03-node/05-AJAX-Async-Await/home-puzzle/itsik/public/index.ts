const dog = document.querySelector(".contDog")as HTMLDivElement;
const cat = document.querySelector(".contCat")as HTMLDivElement;
const dogBtn = document.querySelector("#dogResult")as HTMLButtonElement;
const catBtn = document.querySelector("#catResult")as HTMLButtonElement;

dogBtn.addEventListener("click", getDogImage)
// catBtn.addEventListener("click", getCatImage)


function getDogImage(){
    const dog = document.querySelector(".contDog")as HTMLDivElement;
    try {
        fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data =>{
         if(dog){
            console.log(data)
            const show = `<img src="${data.Message}">`
           dog.innerHTML = show
         }  
    })
    } catch (error) {
        console.error(error)
    }
    


}

// function getCatImage(){

// }