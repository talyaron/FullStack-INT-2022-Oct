const btn = document.querySelector("#btn");

if (btn) {
  //event driven coding
  btn.addEventListener("click", () => {
    try {
      //synchonic coding
      console.log("start");
      const result: HTMLElement | null = document.querySelector("#result");
      if (!result) throw new Error("Couldnt find element result");
      //get number from server
      console.log("get number");
      //rest API

      //asynchronic coding
      //call a server
      fetch("https://api.chucknorris.io/jokes/random",{
        method: 'POST',
        body:  {title: 'MyTitle'}
        }) //promise
        .then((response) => response.json())
        .then((data) => {
          try {
            console.log(data);
            const { id } = data;
            // if (!number && number !== 0) throw new Error("Couldnt get number from server");

            result.innerText = id;
          } catch (error) {
            console.error(error);
          }
        });

      console.log("end");
    } catch (error) {
      console.error(error);
    }
  });
}
