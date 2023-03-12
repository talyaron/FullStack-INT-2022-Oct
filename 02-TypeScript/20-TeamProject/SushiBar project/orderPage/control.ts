
function renderOrders(cart): string {
    try {
        let html = `<div class="orders">`
        Object.entries(cart).forEach(([itemName, item]) => {
            html +=
                `   <br/><br/>
                    <div class="orders__products">
                    <div class="orders__products__img">
                        <img src=${(item as any).imgLink} alt="">
                    </div>
                    <div class="orders__products__name">${itemName}</div>
                    <div class="orders__products__price">${(item as any).price}</div>
                    <div id=${(item as any).uid} class="orders__products__quantity">${(item as any).quantity}</div>
                    <div class="orders__products__wrapperBtn">
                        <div onclick="addQuantity('${(item as any).uid}', '${itemName}')" class="orders__products__wrapperBtn__btnAdd">+</div>
                        <div onclick="deleteQuantity('${(item as any).uid}', '${itemName}')" class="orders__products__wrapperBtn__btnRemove">-</div>
                    </div>
                </div>
            `;
        })

        html += `</div>`

        return html;

    } catch (error) {
        console.error(error);
        return "";
    }

}


function addQuantity(uid: string, itemName: string) {

    const quantityElement = document.getElementById(uid);
    if (quantityElement !== null) {
        let quantity = Number(quantityElement?.innerText);
        quantity++;
        quantityElement.innerText = String(quantity)
        const cartStr = localStorage.getItem('cart');
        if (cartStr) {
            const cartObj = JSON.parse(cartStr);
            cartObj[itemName].quantity = quantity;
            const cartData = JSON.stringify(cartObj);
            localStorage.setItem('cart', cartData);

            if (totalSumElement != null) {
                totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
            }
        }

    }
}


function deleteQuantity(uid: string, itemName: string) {

    const quantityElement = document.getElementById(uid);
    if (quantityElement !== null) {
        let quantity = Number(quantityElement?.innerText);
        quantity--;
        if (quantity >= 0) {
            quantityElement.innerText = String(quantity);
            const cartStr = localStorage.getItem('cart');
            if (cartStr) {
                const cartObj = JSON.parse(cartStr);
                cartObj[itemName].quantity = quantity;
                const cartData = JSON.stringify(cartObj);
                localStorage.setItem('cart', cartData);

                if (totalSumElement != null) {
                    totalSumElement.innerHTML = String(calculateTotalOrder(cartObj));
                }
            }
        }
    }
}