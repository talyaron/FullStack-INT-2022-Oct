
getList()

async function getList() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message)
    } catch (error) {
        console.log(error);
    }

}

function createBreedList(breedList: Object) {
    const collapseList: HTMLElement = document.getElementById('names')!;
    const html = `
        ${Object.keys(breedList).map(breed => `
        <option type=${breed}>${breed}</option>
        `).join('')}
        
        `
    collapseList.innerHTML = html
}



function handleSubmitForm(ev: any) {
    try {
        const barkSound =  new Audio()
            barkSound.src = "./bark.wav"

        const imgElementContainer: HTMLDivElement | any = document.querySelector('.container-main__container-img')!;

        ev.preventDefault()
        const valueTarget = ev.target.elements.name.value;
        fetch(`https://dog.ceo/api/breed/${valueTarget}/images/random`).then(response => response.json()).then(data => {

        imgElementContainer.innerHTML = `
        <img ) name="dog-${valueTarget}" src="${data.message}" onclick="handleClickBreed(event)" title="${valueTarget}">
        `
        })

        
        barkSound.play()
    } catch (error) {
        console.error(error);
    }
}

function handleClickBreed(ev:any){
 try {
    window.open(`https://www.google.com/search?q=${ev.target.name}`)
 } catch (error) {
    console.log(error);
 }
}

