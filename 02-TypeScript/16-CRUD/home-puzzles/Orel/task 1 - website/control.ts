
function giveStar(index: number) {
    let stars = ``
    for (let i = 0; i < index; i++) {
        stars += `<i class="fa-solid fa-star"></i>`
    }
    return stars
}

renderMovies()
// handler Functions
// BUTTONS -----------------------------
function handlerClickBurger(){
    const adminMenuCollapse = document.querySelector('.admin-collapse')! as HTMLElement;
    const adminView = document.querySelector('.admin-menu')! as HTMLDivElement
    if(adminMenuCollapse.classList.contains("active")){
        adminMenuCollapse.classList.remove("active")
        adminView.classList.remove('active')
    } else {
        adminMenuCollapse.classList.add("active")
        adminView.classList.add('active')

    }
}
//CLICK
//ADD
function handlerClickAddMovie(){
try {
    const adminView = document.querySelector('.admin-menu')! as HTMLDivElement
    const adminMenuDivs = document.querySelectorAll(".admin-menu-divs")!;
    adminMenuDivs.forEach(e=>{
  if(e.classList.contains("add-movie")){
    e.classList.add("active")
    adminView.classList.add('active')
  } else {
    e.classList.remove("active")
  }
    })
} catch (error) {
    console.log(error);
}

}
//REMOVE
function handlerClickRemoveMovie(){
try {
    const adminView = document.querySelector('.admin-menu')! as HTMLDivElement
    const adminMenuDivs = document.querySelectorAll(".admin-menu-divs")!;
    adminMenuDivs.forEach(e=>{
  if(e.classList.contains("remove-movie")){
    e.classList.add("active")
  } else {
    e.classList.remove("active")
  }
    })
    adminView.classList.add('active')
} catch (error) {
    console.log(error);
}
}
//UPDATE
function handlerClickUpdateMovie(){
try {
    const adminView = document.querySelector('.admin-menu')! as HTMLDivElement
    const adminMenuDivs = document.querySelectorAll(".admin-menu-divs")!;
    adminMenuDivs.forEach(e=>{
  if(e.classList.contains("update-movie")){
    e.classList.add("active")
  } else {
    e.classList.remove("active")
  }
    })
    adminView.classList.add('active')
} catch (error) {
    console.log(error);
}
}

// SUBMIT ------------------------------
//ADD
function handlerSubmitAdd(ev:any){
        try {
                ev.preventDefault()
            const {url , name , stars , des ,release} = ev.target.elements
            console.log(release.value);
                 movies.push(new Movies(url.value , name.value , des.value, stars.value  ,Number(release.value)))
                 renderToLocalStorage(movies)
                 return renderMovies()
        } catch (error) {
            console.log(error);
        }
}
//REMOVE
 function handlerSubmitRemove(ev){
try {
       ev.preventDefault();
       const allMovie = document.querySelectorAll('.container-movies .movie');
       allMovie.forEach(movie=>{
        const m = movie as HTMLElement
        if(m.style.display === "block"){
        const nameMovie = movie.getAttribute('data') as string ;
        const index = movies.forEach((m , index)=>{
            if(m.name === nameMovie){
                movies.splice(index , 1)
            }})

    renderMovies()
    ev.target.reset()
    }
     
    })   

} catch (error) {
    console.log(error);
}
 }

 function handlerSubmitUpdate(ev){
    try {
        ev.preventDefault();
        const value = ev.target.elements.nameToChance.value
        const allMovie = document.querySelectorAll('.container-movies .movie');
        allMovie.forEach(movie=>{
            const m = movie as HTMLElement
         if(m.style.display === "block"){
         const nameMovie = movie.getAttribute('data') as string ;
         const index = movies.forEach((m , index)=>{
             if(m.name === nameMovie){
                    movies[index].name = value
             }})
 
     renderMovies()
     ev.target.reset()
     }
      
     })   
 
 } catch (error) {
     console.log(error);
 }
 }

//Chance 
//REMOVE
function handlerChanceRemove(ev){
    try {
            let value = ev.target.value.toLowerCase();
            const allMovie = document.querySelectorAll('.container-movies .movie');
                allMovie.forEach(element=>{
                    const DATA = element.getAttribute('DATA')?.toLowerCase()! as string;
                    const el = element as HTMLElement
                    if(DATA.includes(value)){
                        el.style.display = "block"
                    } else {
                        el.style.display = "none"
                    } 

                })
    } catch (error) {
        console.log(error);
    }
}
//UPDATE
function handlerChanceUpdate(ev){
    try {
        let value = ev.target.value.toLowerCase();
        const allMovie = document.querySelectorAll('.container-movies .movie');
            allMovie.forEach(element=>{
                const DATA = element.getAttribute('DATA')?.toLowerCase()! as string;
                const el = element as HTMLElement
                if(DATA.includes(value)){
                    el.style.display = "block"
                } else {
                    el.style.display = "none"
                } 
            })
} catch (error) {
    console.log(error);
}
}