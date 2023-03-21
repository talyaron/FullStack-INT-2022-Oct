const imgElement = document.querySelector("#dogImg") as HTMLImageElement;
const imageGeneratorBtn = document.querySelector(
  "#imageGeneratorBtn"
) as HTMLButtonElement;
const selectElement = document.querySelector(
  "#dogBreedOptions"
) as HTMLSelectElement;

imageGeneratorBtn.addEventListener("click", () =>
  displayImage(selectElement.value)
);

async function displayImage(breed: string) {
  const imageList: string[] = await fetch(
    `https://dog.ceo/api/breed/${breed}/images`
  )
    .then((res) => res.json())
    .then((data) => {
      const { message } = data;
      return message;
    })
    .catch((err) => console.error(err));
  const randomIndex = Math.floor(Math.random() * imageList.length);
  imgElement.src = imageList[randomIndex];
}
