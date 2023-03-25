const btn = document.querySelector(`#btn`);

if (btn) {
  btn.addEventListener("click", () => {
    try {
      const imageShower = document.querySelector("#imageShower");
      if (!imageShower) throw new Error("Couldnt find Pic Of Dog");
      fetch("https://dog.ceo/api/breeds/image/random") 
        .then((response) => response.json())
        .then((data) => {
            const { message } = data;
            const img = document.createElement("img");
            img.src = message;
            imageShower.innerHTML = "";
            imageShower.appendChild(img);

        });
    } catch (error) {
      console.error(Error);
    }
  });
}

