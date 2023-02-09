function handleForm(ev) {
    try {
        ev.preventDefault();
        var img = ev.target.elements.birdImg.value;
        var name = ev.target.elements.birdName.value;
        var size = ev.target.elements.birdSize.value;
        var color = ev.target.elements.birdColor.value;
        var location = ev.target.elements.newLocation.value;
        var area = ev.target.elements.birdLocation.value;
        var action = ev.target.elements.birdAction.value;
        birds.push(new Bird(img, name, size, color, area, action));
        sendBirdsToStorage();
        locations.push(new Area(location));
        sendLocationToStorage();
        console.log(location);
        ev.target.reset();
        renderForm(birds, "birdCardContainer");
        renderSelectLocation(locations, "birdLocation");
        renderSelectLocation(locations, "birdSearch");
    }
    catch (error) {
        console.error(error);
    }
}
function renderForm(birds, renderElementId) {
    try {
        if (!birds || !Array.isArray(birds))
            throw new Error("birds is not an array");
        var html = birds
            .map(function (birds) {
            return "\n        <div class=\"birdCard\">\n        <img src=\"" + birds.img + "\">\n        <h3>Bird Name: </h3>\n       <h2 style=\" color: royalBlue;\">" + birds.name + "</h2>\n        <h3>Size Of The Bird:</h3\n        <p> " + convertSize(birds.size) + "</p>\n        <h3>Main Color Of The Bird:</h3>\n        <div  class=\"displayColor\"  style= \"background-color:" + birds.color + "\"> </div>\n        <h3>Birds Location:</h3>\n        <p> " + birds.area + "</p>\n        <h3>Birds Action:</h3>\n        <p>" + birds.action + "</p>\n    </div>\n        ";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderSelectLocation(locations, renderElementId) {
    try {
        if (!locations || !Array.isArray(locations))
            throw new Error("locations is not an array");
        var html = locations
            .map(function (locations) {
            return "\n         <option>\n         " + locations.locations + "\n         </option>";
        })
            .join(" ");
        var element = document.querySelector("#" + renderElementId);
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.log(error);
    }
}
function findFromLocation(ev) {
    try {
        ev.preventDefault;
    }
    catch (error) {
    }
}
