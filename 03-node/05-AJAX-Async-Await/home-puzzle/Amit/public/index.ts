function handleBreedSelection(ev: any) {
    try {
        ev.preventDefault();
        const breed = ev.target.elements.dogs.value;

        breeds.push(breed);

        fetchImageFromDogApi(breed);

    } catch (error) {
        console.error("error")
       
    }
}

function fetchImageFromDogApi(breed) {

    try {
        
    } catch (error) {
        console.error("error")
    }
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`) //promise
        .then((response) => response.json())
        .then((data) => {
            try {
                if (!image) throw new Error("could not find ing div");
                
                image.style.backgroundImage = `url(${data.message})`;
            } catch (error) {
                console.error(error);
            }
        });
}

const image: HTMLElement | null = document.querySelector("#img");


const breeds: string[] = [];







