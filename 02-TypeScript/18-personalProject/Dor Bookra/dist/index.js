var _a;
hideUnhide(event);
hideUnhide2(event);
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
        if (!birdsData)
            throw new Error("could not retrieve birds");
        var data = JSON.parse(birdsData);
        renderForm(data, "birdCardContainer");
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
var birds = (_a = getBirdsFromStorage()) !== null && _a !== void 0 ? _a : [];
function dataFromStorage2() {
    try {
        var dataFromStorageItems = localStorage.getItem("items");
        if (!dataFromStorageItems || dataFromStorageItems === null) {
            updateItemsToLocalStorage();
        }
        else if (getItemsFromStorage().length < items.length) {
            updateItemsToLocalStorage();
        }
        else {
            var data = JSON.parse(dataFromStorageItems);
            items.push.apply(items, data);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function updateItemsToLocalStorage() {
    try {
        if (!items)
            throw new Error("not find items in local storage");
        localStorage.setItem("items", JSON.stringify(items));
    }
    catch (error) {
        console.log(error);
    }
}
function getItemsFromStorage() {
    try {
        var dataJson = localStorage.getItem("items");
        if (!dataJson)
            throw new Error("not find items in local storage");
        var data = JSON.parse(dataJson);
        return data;
    }
    catch (error) {
        console.log(error);
        return undefined;
    }
}
renderItemForm(items, "itemCardContainer");
