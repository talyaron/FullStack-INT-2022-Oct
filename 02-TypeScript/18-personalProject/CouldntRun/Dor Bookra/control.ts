function handleForm(ev){
    try {
        ev.preventDefault();
        const img = ev.target.elements.birdImg.value;
        const name = ev.target.elements.birdName.value;
        const size = ev.target.elements.birdSize.value;
        const color = ev.target.elements.birdColor.value;
            const location = ev.target.elements.newLocation.value;
        const area = ev.target.elements.birdLocation.value;
        const action = ev.target.elements.birdAction.value;
        
        birds.push(new Bird(img, name, size, color, area, action))
        sendBirdsToStorage()
             locations.push(new Area(location))
              sendLocationToStorage ()
              console.log(location);
              
        ev.target.reset()
        renderForm(birds,"birdCardContainer");
             renderSelectLocation(locations, "birdLocation")
             renderSelectLocation(locations, "birdSearch")
    } 
    catch (error) {
        console.error(error);
        
    }
}

function renderForm(birds:Bird[], renderElementId: string): void{
    try {
       if(!birds || !Array.isArray(birds))
       throw new Error("birds is not an array");
       const html = birds
       .map((birds) =>{
        
        return `
        <div class="birdCard">
        <img src="${birds.img}">
        <h3>Bird Name: </h3>
       <h2 style=" color: royalBlue;">${birds.name}</h2>
        <h3>Size Of The Bird:</h3
        <p> ${convertSize(birds.size)}</p>
        <h3>Main Color Of The Bird:</h3>
        <div  class="displayColor"  style= "background-color:${birds.color}"> </div>
        <h3>Birds Location:</h3>
        <p> ${birds.area}</p>
        <h3>Birds Action:</h3>
        <p>${birds.action}</p>
    </div>
        `})
        
        .join (" ")
        const element = document.querySelector(`#${renderElementId}`);
             if (!element) throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        
    }
}

function renderSelectLocation(locations:Area[], renderElementId: string):void{
    try {
        if(!locations || !Array.isArray(locations))
        throw new Error("locations is not an array");
        const html = locations
        .map((locations) =>{
         return `
         <option>
         ${locations.locations}
         </option>`
         
        }) 
         .join (" ")
         const element = document.querySelector(`#${renderElementId}`);
              if (!element) throw new Error("Couldnt find element in the DOM");
         element.innerHTML = html;
        
    } catch (error) {
        console.log(error);
    }

}

function findFromLocation(ev){
    try {
        ev.preventDefault
    } catch (error) {
        
    }

}