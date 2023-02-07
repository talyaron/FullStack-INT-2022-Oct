function handleForm(ev){
    try {
        ev.preventDefault();
        const img = ev.target.elements.birdImg.value;
        const name = ev.target.elements.birdName.value;
        const size = ev.target.elements.birdSize.value;
        const color = ev.target.elements.birdColor.value;
        const location = ev.target.elements.birdLocation.value;
        const action = ev.target.elements.birdAction.value;
        
        birds.push(new Bird(img, name, size, color, location, action))
        sendBirdsToStorage()
        ev.target.reset()
        renderForm(birds,"birdCardContainer");
        
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
        <h3>Bird Name: <br>${birds.name}</h3>
        <h3>Color Of The Bird:</h3
        <p> ${convertSize(birds.size)}</p>
        <h3>Color Of The Bird:</h3>
        <div  class="displayColor"  style= "background-color:${birds.color}"> </div>
        <h3>Birds Location:</h3>
        <p> ${birds.location}</p>
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

function handleItemForm(ev){
    try {
        ev.preventDefault();
        const img = ev.target.elements.itemImg.value;
        const name = ev.target.elements.itemName.value;
        const desc = ev.target.elements.itemDesc.value;
        const price = ev.target.elements.itemPrice.value;
        
        items.push(new item(img, name, desc, price))
        
        ev.target.reset()

        renderItemForm(items,"itemCardContainer");
    } 
    catch (error) {
        console.error(error);
        
    }
}

function renderItemForm(items:item[], renderElementId: string): void{
    try {
        
       if(!items || !Array.isArray(items))
       throw new Error("items is not an array");
       const html =  getItemsFromStorage()!
       .map((items) =>{
        
        return `
        <div class="itemCard">
        <img src="${items.img}">
        <h3>Item Name: <br>${items.name}</h3>
        <h3>items Description:</h3>
        <p> ${items.desc}</p>
        <h3>Price:</h3>
        <p>${items.price}</p>
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

