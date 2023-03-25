

const dogsBreeds = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const dogBreedObject = await res.json()
    return dogBreedObject.message
}

async function renderBreeds() {
    const dogBreedObject = await dogsBreeds()
    const dogBreedsHtml = document.querySelector('#dogBreeds');

    if (dogBreedsHtml){
        const dogBreedArray = Object.keys(dogBreedObject)
        for (let i = 0 ; i < dogBreedArray.length ; i++){
            dogBreedsHtml.insertAdjacentHTML('beforeend',`<option>${dogBreedArray[i]}</option>`);
        }
        return dogBreedArray
    }

}

async function displayDogImage() {
    const dogBreedOption:any = document.querySelector('#dogBreeds')
    const chooseBreed:any = document.querySelector('.chooseBreed')
    if(dogBreedOption){
        const dogBreed = dogBreedOption.options[dogBreedOption.selectedIndex].text
        const dogImageResponse = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        const dogImage = await dogImageResponse.json()
        chooseBreed.insertAdjacentHTML('afterend', `<img src="${dogImage['message']}" alt="" srcset="">`)
    }


}

renderBreeds();