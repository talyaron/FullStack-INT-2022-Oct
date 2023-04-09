
const btn = document.querySelector("#btn") as HTMLButtonElement

btn.addEventListener("click", () => {
    try {
        const result: HTMLDivElement | null = document.querySelector("#result")
        if(!result) throw new Error ("can't be null")
        
        fetch("/random-number")
            .then((response) => response.json())
            .then((data) => {
                try {
                    console.log(data);
                    const {number} = data;
                    if(!number && number !== 0) throw new Error("Data can't get number from server");
                    result.innerText = number
                    
                } catch (error) {
                    console.error(error);    
                }
            })         
            
    } catch (error) {
        console.error(error)
    }
}) 
