hideUnhide(event);
hideUnhide2(event);
const birds:Bird[] = getBirdsFromStorage ()??[];
const locations:Area[] = getLocationFromStorage()??[];
pushToArray()
addLocations()


function sendBirdsToStorage (){
    try {
        if(!birds) throw new Error("could not find birds ")
        localStorage.setItem("birds", JSON.stringify(birds))
    } catch (error) {
        console.log(error);
        
    }
}
function getBirdsFromStorage (){
    try {
        const birdsData = localStorage.getItem("birds")
        if(!birdsData){ throw new Error("could not retrieve birds")}
        const data = JSON.parse(birdsData)
        renderForm(data,"birdCardContainer");
        return data
    } catch (error) {
        console.log(error);    
    }
}

function sendLocationToStorage (){
    try {
        if (!locations) throw new Error("could not find locations")
        localStorage.setItem("locations" , JSON.stringify(locations))
    } catch (error) {
        console.log(error);
    }
}

function getLocationFromStorage (){
    try {
        const locationData = localStorage.getItem("locations")
        if(!locationData){ throw new Error("could not retrieve locations2")}
        const data = JSON.parse(locationData)
        renderSelectLocation(data, "birdLocation");
        renderSelectLocation(data, "birdSearch");
        return data
    } catch (error) {
        console.log(error);    
    }
}