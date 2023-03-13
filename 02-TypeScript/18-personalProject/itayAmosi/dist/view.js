var container = document.querySelector(".container");
var itemsRoot = document.querySelector('#itemsRoot');
var contWidth = container.offsetWidth;
var contHeight = container.offsetHeight;
var form = document.getElementById("form");
function getItemsFromStorage() {
    try {
        var usersString = localStorage.getItem("users");
        if (!usersString)
            throw new Error("cant find");
        var users = JSON.parse(usersString);
        return users;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
