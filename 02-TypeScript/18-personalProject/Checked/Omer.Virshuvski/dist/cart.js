renderCart(".cartMain", getItemsInCart());
window.addEventListener('load', total);
function total() {
    var temp = getItemsInCart();
    if (!temp || temp.length == 0) {
        totalPrice.innerHTML = "";
    }
    else {
        totalPrice.innerHTML = "Total price: " + howMuch(temp) + "$";
    }
}
function howMuch(items) {
    var num = 0;
    items.forEach(function (item) {
        num += parseInt(item.price.toString());
    });
    return num;
}
