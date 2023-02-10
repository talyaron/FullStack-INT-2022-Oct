function handleForm(ev){
    try {
        ev.preventDefault();
        const img = ev.target.elements.birdImg.value;
        const name = ev.target.elements.birdName.value;
        const size = ev.target.elements.birdSize.value;
        const color = ev.target.elements.birdColor.value;
        const location = ev.target.elements.newLocation.value;
        const action = ev.target.elements.birdAction.value;
        
        birds.push(new Bird(img, name, size, color,location, action))
        sendBirdsToStorage()
        renderForm(birds,"birdCardContainer");
        if(!checksIfLocationExists(locations, location)){
            locations.push(new Area(location))
            sendLocationToStorage ()
            renderSelectLocation(locations, "birdSearch")
            
        }
        ev.target.reset()
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
        <p> ${birds.locations}</p>
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
function checksIfLocationExists(array:Area[] , value:string ): boolean{
    try {
        const locationPicked = array.find(array => array.locations.toLowerCase() === value.toLowerCase())
        
        if (!locationPicked) return false
        else {
            return true
        }
    } catch (error) {
        console.error(error);
        return false

    }
}
function filterLocations(ev){
    try {
        ev.preventDefault();
        let birdsArray:Bird[] = [];
        const inputSearchValue = ev.target.elements.birdSearch.value
        if(inputSearchValue === "None"){
            renderForm(birds , "birdCardContainer");
        }
        else{

        
        const  findSearchArr =  birds.filter(birds => birds.locations.toLocaleLowerCase() === inputSearchValue.toLocaleLowerCase())
        if(!birdsArray) return alert("no birds found")
        birdsArray = findSearchArr
         renderForm(birdsArray , "birdCardContainer");
        }
    } catch (error) {
        console.error(error);
    }
}
