var _a, _b;
hideUnhide(event);
hideUnhide2(event);
var birds = (_a = getBirdsFromStorage()) !== null && _a !== void 0 ? _a : [];
var locations = (_b = getLocationFromStorage()) !== null && _b !== void 0 ? _b : [];
pushToArray();
addLocations();
function sendBirdsToStorage() {
    try {
        if (!birds)
            throw new Error("could not find birds ");
        localStorage.setItem("birds", JSON.stringify(birds));
    }
    catch (error) {
        console.log(error);
    }
}
function getBirdsFromStorage() {
    try {
        var birdsData = localStorage.getItem("birds");
        if (!birdsData) {
            throw new Error("could not retrieve birds");
        }
        var data = JSON.parse(birdsData);
        renderForm(data, "birdCardContainer");
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
function sendLocationToStorage() {
    try {
        if (!locations)
            throw new Error("could not find locations");
        localStorage.setItem("locations", JSON.stringify(locations));
    }
    catch (error) {
        console.log(error);
    }
}
function getLocationFromStorage() {
    try {
        var locationData = localStorage.getItem("locations");
        if (!locationData) {
            throw new Error("could not retrieve locations2");
        }
        var data = JSON.parse(locationData);
        renderSelectLocation(data, "birdLocation");
        renderSelectLocation(data, "birdSearch");
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
