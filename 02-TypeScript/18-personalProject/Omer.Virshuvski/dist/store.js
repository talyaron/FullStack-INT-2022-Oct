renderStore(".main", getItems());
window.addEventListener('load', function () {
    try {
        var temp = getItemsInCart();
        if (temp != null) {
            if (temp.length != 0) {
                itemsInCart.innerHTML = temp.length.toString();
            }
            else {
                itemsInCart.classList.add("hide");
            }
        }
    }
    catch (error) {
        console.error(error);
    }
});
