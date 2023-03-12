
const cartStr = localStorage.getItem('cart');
if (cartStr != null) {
    const cartObj = JSON.parse(cartStr);

    const renderedOrders = renderOrders(cartObj)
    if (orderElement != null) {
        orderElement.innerHTML = renderedOrders
    }
    debugger
    if (totalSumElement != null) {
        totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
    }
}

function calculateTotalOrder(cart): number {
    let sum = 0;
    Object.entries(cart).forEach(([itemName, item]) => {
        sum += item.price * item.quantity
    });

    return sum;
}



