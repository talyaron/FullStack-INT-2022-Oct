const imgElement = document.querySelector("#dogImg") as HTMLImageElement;
const imageGeneratorBtn = document.querySelector(
  "#imageGeneratorBtn"
) as HTMLButtonElement;
const selectElement = document.querySelector(
  "#dogBreedOptions"
) as HTMLSelectElement;

// console.log(selectElement.value);

imageGeneratorBtn.addEventListener("click", displayImage);

function getImageFromAPI(breed: string) {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => data.message);
}

async function displayImage() {
  const imageList: [] = await getImageFromAPI(selectElement.value);
  const randomIndex = Math.floor(Math.random() * imageList.length);
  imgElement.src = imageList[randomIndex];
}

// displayImage();
