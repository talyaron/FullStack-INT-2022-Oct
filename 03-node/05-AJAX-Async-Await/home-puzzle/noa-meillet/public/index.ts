const btn = document.querySelector("#btn");

if (btn) {
  btn.addEventListener("click", () => {
    try {
      const imgElement: HTMLImageElement | null = document.querySelector("#dogImg");
      if (!imgElement) throw new Error("Couldnt find element result");
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          try {
            console.log(data);
            const { message } = data;
            if (!message) throw new Error("Couldnt get number from server");
            imgElement.setAttribute("src",`${message}`);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  });
}
