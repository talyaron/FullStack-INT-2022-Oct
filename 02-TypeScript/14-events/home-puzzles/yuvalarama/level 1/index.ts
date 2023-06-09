const box = document.querySelector(".box") as HTMLDivElement

// function getRandomColor(){
//     "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
// }

box.addEventListener("click" , ()=>{
    box.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
})

//לשאול את טל לגבי הסימון הכחול על הכתב