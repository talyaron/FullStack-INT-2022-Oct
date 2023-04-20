const btn = document.querySelector("#btn");

if (btn) {
  //event driven coding
  btn.addEventListener("click", () => {
    try {
      //synchonic coding
    
      const result: HTMLElement | null = document.querySelector("#result");
      if (!result) throw new Error("Couldnt find element result");
      //get number from server
      console.log("get number");
      //rest API

      //asynchronic coding
      //call a server
      fetch("/random-number3333") //promise
        .then((response) => response.json())
        .then((data) => {
          try {
           
            console.log(data);
            const { number } = data;
            if (!number && number !== 0) throw new Error("Couldnt get number from server");

            result.innerText = number;
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
