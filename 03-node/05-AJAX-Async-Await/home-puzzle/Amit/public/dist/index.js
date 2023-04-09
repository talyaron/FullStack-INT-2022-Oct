function handleBreedSelection(ev) {
    try {
        ev.preventDefault();
        var breed = ev.target.elements.dogs.value;
        breeds.push(breed);
        fetchImageFromDogApi(breed);
    }
    catch (error) {
        console.error("error");
    }
}
function fetchImageFromDogApi(breed) {
    try {
    }
    catch (error) {
        console.error("error");
    }
    fetch("https://dog.ceo/api/breed/" + breed + "/images/random") //promise
        .then(function (response) { return response.json(); })
        .then(function (data) {
        try {
            if (!image)
                throw new Error("could not find ing div");
            image.style.backgroundImage = "url(" + data.message + ")";
        }
        catch (error) {
            console.error(error);
        }
    });
}
var image = document.querySelector("#img");
var breeds = [];
