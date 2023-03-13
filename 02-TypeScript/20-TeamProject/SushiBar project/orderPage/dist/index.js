var cartStr = localStorage.getItem('cart');
if (cartStr != null) {
    var cartObj = JSON.parse(cartStr);
    var renderedOrders = renderOrders(cartObj);
    if (orderElement != null) {
        orderElement.innerHTML = renderedOrders;
    }
    debugger;
    if (totalSumElement != null) {
        totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
    }
}
function calculateTotalOrder(cart) {
    var sum = 0;
    Object.entries(cart).forEach(function (_a) {
        var itemName = _a[0], item = _a[1];
        sum += item.price * item.quantity;
    });
    return sum;
}
