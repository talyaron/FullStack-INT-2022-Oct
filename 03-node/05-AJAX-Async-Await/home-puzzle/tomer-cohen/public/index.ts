
const GetImage = document.querySelector("#GetImage");

if (GetImage) {
    //event driven coding
    GetImage.addEventListener("click", () => {
      try {
        const picOfDog: any = document.querySelector("#picOfDog");
        if (!picOfDog) throw new Error("Couldnt find Pic Of Dog");
        console.log("get image");
        fetch("https://dog.ceo/api/breeds/image/random") 
          .then((response) => response.json())
          .then((data) => {
            try {
              console.log(data);
              const { message } = data;
              const img = document.createElement("img");
              img.src = message;
              picOfDog.innerHTML = "";
              picOfDog.appendChild(img);
            } catch (error) {
              console.error(error);
            }
          });
      } catch (error) {
        console.error(error);
      }
    });
  }
  

