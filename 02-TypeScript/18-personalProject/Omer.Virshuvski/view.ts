const form = <HTMLElement>document.getElementById("theForm");
function getItems() {
    try {
        const itemsString = localStorage.getItem("items");
        if(!itemsString) throw new Error("No items");
        const items = JSON.parse(itemsString);
        
        return items;
    } catch (error) {
        console.error(error);
        return null
        
    }
}
const ham = <HTMLElement>document.querySelector(".top__hamburger");
const hamTop = <HTMLElement>document.querySelector(".top__hamburger__top");
const hamMid = <HTMLElement>document.querySelector(".top__hamburger__mid");
const hamBottom = <HTMLElement>document.querySelector(".top__hamburger__bottom");
const menu = <HTMLElement>document.querySelector(".menu");
const sortName = <HTMLElement>document.querySelector(".sortName");
const sortPrice = <HTMLElement>document.querySelector(".sortPrice");
const sortType = <HTMLElement>document.querySelector(".sortType");
let change = true;