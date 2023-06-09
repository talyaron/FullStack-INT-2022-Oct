function renderOrders(cart) {
    try {
        var html_1 = "<div class=\"orders\">";
        Object.entries(cart).forEach(function (_a) {
            var itemName = _a[0], item = _a[1];
            html_1 +=
                "   <br/><br/>\n                    <div class=\"orders__products\">\n                    <div class=\"orders__products__img\">\n                        <img src=" + item.imgLink + " alt=\"\">\n                    </div>\n                    <div class=\"orders__products__name\">" + itemName + "</div>\n                    <div class=\"orders__products__price\">" + item.price + "</div>\n                    <div id=" + item.uid + " class=\"orders__products__quantity\">" + item.quantity + "</div>\n                    <div class=\"orders__products__wrapperBtn\">\n                        <div onclick=\"addQuantity('" + item.uid + "', '" + itemName + "')\" class=\"orders__products__wrapperBtn__btnAdd\">+</div>\n                        <div onclick=\"deleteQuantity('" + item.uid + "', '" + itemName + "')\" class=\"orders__products__wrapperBtn__btnRemove\">-</div>\n                    </div>\n                </div>\n            ";
        });
        html_1 += "</div>";
        return html_1;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function addQuantity(uid, itemName) {
    var quantityElement = document.getElementById(uid);
    if (quantityElement !== null) {
        var quantity = Number(quantityElement === null || quantityElement === void 0 ? void 0 : quantityElement.innerText);
        quantity++;
        quantityElement.innerText = String(quantity);
        var cartStr = localStorage.getItem('cart');
        if (cartStr) {
            var cartObj = JSON.parse(cartStr);
            cartObj[itemName].quantity = quantity;
            var cartData = JSON.stringify(cartObj);
            localStorage.setItem('cart', cartData);
            if (totalSumElement != null) {
                totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
            }
        }
    }
}
function deleteQuantity(uid, itemName) {
    var quantityElement = document.getElementById(uid);
    if (quantityElement !== null) {
        var quantity = Number(quantityElement === null || quantityElement === void 0 ? void 0 : quantityElement.innerText);
        quantity--;
        if (quantity >= 0) {
            quantityElement.innerText = String(quantity);
            var cartStr = localStorage.getItem('cart');
            if (cartStr) {
                var cartObj = JSON.parse(cartStr);
                cartObj[itemName].quantity = quantity;
                var cartData = JSON.stringify(cartObj);
                localStorage.setItem('cart', cartData);
                if (totalSumElement != null) {
                    totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
                }
            }
        }
    }
}
