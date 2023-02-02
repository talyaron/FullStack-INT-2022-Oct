var form = document.getElementById("theForm");
function getItems() {
    try {
        var itemsString = localStorage.getItem("items");
        if (!itemsString)
            throw new Error("No items");
        var items = JSON.parse(itemsString);
        return items;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
var ham = document.querySelector(".top__hamburger");
var hamTop = document.querySelector(".top__hamburger__top");
var hamMid = document.querySelector(".top__hamburger__mid");
var hamBottom = document.querySelector(".top__hamburger__bottom");
var menu = document.querySelector(".menu");
var change = true;
