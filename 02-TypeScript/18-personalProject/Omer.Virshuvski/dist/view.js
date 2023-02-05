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
        localStorage.setItem("items", JSON.stringify([]));
        return null;
    }
}
var ham = document.querySelectorAll(".top__hamburger");
var hamTop = document.querySelectorAll(".top__hamburger__top");
var hamMid = document.querySelectorAll(".top__hamburger__mid");
var hamBottom = document.querySelectorAll(".top__hamburger__bottom");
var menu = document.querySelectorAll(".menu");
var sortName = document.querySelector(".sortName");
var sortPrice = document.querySelector(".sortPrice");
var sortType = document.querySelector(".sortType");
var change = true;
var itemsInCart = document.querySelector(".top__cart__items");
var totalPrice = document.querySelector(".checkout__totalPrice");
function getItemsInCart() {
    try {
        var itemsString = localStorage.getItem("cartItems");
        if (!itemsString)
            throw new Error("No items in cart");
        var items = JSON.parse(itemsString);
        return items;
    }
    catch (error) {
        console.error(error);
        localStorage.setItem("cartItems", JSON.stringify([]));
        return null;
    }
}
