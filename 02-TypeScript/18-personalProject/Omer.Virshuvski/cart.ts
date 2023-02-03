renderCart(".cartMain", getItemsInCart());

window.addEventListener('load', total)
function total() {
    const temp = getItemsInCart();
    if(!temp || temp.length == 0) {
        totalPrice.innerHTML = ""
    } else {
        totalPrice.innerHTML = `Total price: ${howMuch(temp)}$`;
    }
}

function howMuch(items:Product[]):number {
    let num:number = 0;
    items.forEach(item => {
        num += parseInt(item.price.toString());
    })
    return num;
}