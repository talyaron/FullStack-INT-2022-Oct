const form = <HTMLElement>document.getElementById("theForm");
function getItems():Product[]|null {
    try {
        const itemsString = localStorage.getItem("items");
        if(!itemsString) throw new Error("No items");
        const items = JSON.parse(itemsString);
        return items;
    } catch (error) {
        console.error(error);
        localStorage.setItem("items", JSON.stringify([]))
        return null
        
    }
}
const ham = document.querySelectorAll(".top__hamburger");
const hamTop = document.querySelectorAll(".top__hamburger__top");
const hamMid = document.querySelectorAll(".top__hamburger__mid");
const hamBottom = document.querySelectorAll(".top__hamburger__bottom");
const menu = document.querySelectorAll(".menu");
const sortName = <HTMLElement>document.querySelector(".sortName");
const sortPrice = <HTMLElement>document.querySelector(".sortPrice");
const sortType = <HTMLElement>document.querySelector(".sortType");
let change = true;

const itemsInCart = <HTMLElement>document.querySelector(".top__cart__items");
const totalPrice = <HTMLElement>document.querySelector(".checkout__totalPrice");
function getItemsInCart():Product[]|null {
    try {
        const itemsString = localStorage.getItem("cartItems");
        if(!itemsString) throw new Error("No items in cart");
        const items = JSON.parse(itemsString);
        return items;
    } catch (error) {
        console.error(error);
        localStorage.setItem("cartItems", JSON.stringify([]))
        return null
        
    }
}