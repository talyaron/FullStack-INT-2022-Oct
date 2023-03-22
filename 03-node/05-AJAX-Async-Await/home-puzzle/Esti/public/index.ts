const btn = document.querySelector("#btn") as HTMLButtonElement

if(btn){
    btn.addEventListener("click", () => {
        try {

            fetch("/esti")
              .then((response) => response.json())
              .then((data) => {
                    try {
                        const {text} = data
                        document.querySelector("#dogs")!.textContent = text              
                        console.log(text)     

                    } catch (error) {
                        console.error(error);
                    }
            });
          console.log("end");
        } catch (error) {

            console.error(error)
        }
    });
};