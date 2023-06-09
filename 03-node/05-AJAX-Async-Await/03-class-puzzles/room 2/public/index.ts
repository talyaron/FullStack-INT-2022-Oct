




async function getRandomJokesFromApi(element:HTMLElement){
try {
    await fetch('/api/jokes') 
    .then(response=>response.json())
    .then(data=> {  
        const randomNum = Math.ceil(Math.random()*data.jokes.length - 1);
        const html = `
        <div class="container__random-container__boxJoke">
        <h5>${data.jokes[randomNum].joke}</h5>
    </div>
    
        `

        element.innerHTML = html
 
    })
} catch (error) {
    console.error(error)
}


}


 function handleClickRandomBtn(){
    try {
        const root = document.getElementById('rootJokes')! as HTMLElement; 
       getRandomJokesFromApi(root)
    } catch (error) {
        console.error(error)
    }
}