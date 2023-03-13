hideUnhide(event);
hideUnhide2(event);
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
        if(!birdsData) throw new Error("could not retrieve birds")
        const data = JSON.parse(birdsData)
        renderForm(data,"birdCardContainer");
        return data
    } catch (error) {
        console.log(error);    
    }
}

const birds:Bird[] = getBirdsFromStorage ()??[];


function dataFromStorage2() {
    try {

        const dataFromStorageItems = localStorage.getItem("items")
        
        if (!dataFromStorageItems || dataFromStorageItems === null) {
            updateItemsToLocalStorage()
        } else if (getItemsFromStorage()!.length < items.length) {
            updateItemsToLocalStorage()
        }
        else {
            const data = JSON.parse(dataFromStorageItems);
            items.push(...data)

        }
    } catch (error) {
        console.log(error);
    }
}

function updateItemsToLocalStorage() {
    try {
        if (!items) throw new Error("not find items in local storage")
        localStorage.setItem("items", JSON.stringify(items))

    } catch (error) {
        console.log(error);
    }

}


function getItemsFromStorage():item[] | undefined{
    try {
        const dataJson = localStorage.getItem("items")
        if (!dataJson) throw new Error("not find items in local storage")
            const data = JSON.parse(dataJson)
            return data
            
    } catch (error) {
        console.log(error);
        return undefined
    }
}



renderItemForm(items,"itemCardContainer");
