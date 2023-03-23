
displayBreedsList();

const btn = document.querySelector("#btn") as HTMLButtonElement
const selectBreed = document.querySelector("#breedslist") as HTMLSelectElement
const dogImage = document.querySelector("#dogImage") as HTMLImageElement

btn.addEventListener("click", () => {
    displayImageFromBreeds(selectBreed.value)
})

function displayBreedsList() {
    try {
        
        const breedList =  fetch(
        `https://dog.ceo/api/breeds/list/all`
        )
        .then((res) => res.json())
        .then((data) => {
            const { message } = data;

           renderOptionBreerd(Object.keys(message));
           
                     
            return message;
        })

               
    } catch (error) {
        console.error(error);    
    }
        
    }

    function renderOptionBreerd(breeds:string[] ):void{
       try {
            if(!breeds) throw new Error ("Don't catch the breed from url")

            const html = 
            breeds.map((breed) => {
             return `
             <option value="${breed}">${breed}</option>
            `;
           })
           .join(" ");
        //  console.log(`html ${html}`);
         const element = document.querySelector("#breedslist");
         if (!element) throw new Error("Couldnt find element in the DOM");
         element.innerHTML = html;

         displayImageFromBreeds(breeds[Math.floor(Math.random() *  breeds.length)])
           
       } catch (error) {
            console.error(error)
       }        
    }

    

async function displayImageFromBreeds(breed: string) {
    try {
        if(!breed) throw new Error ("Don't have breed selected")     
        const imageBreedList: string[] = await fetch(
        `https://dog.ceo/api/breed/${breed}/images`
        )
        .then((res) => res.json())
        .then((data) => {
            const { message } = data;
            return message;
        })
        if(!imageBreedList) throw new Error ("Don't have image selected")     

        const randomImageIndex = Math.floor(Math.random() * imageBreedList.length);
        dogImage.src = imageBreedList[randomImageIndex];
    } catch (error) {
        console.error(error)        
    }

}
  
