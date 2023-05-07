export async function getCartDetails() {
    try {
        const cartRoot:HTMLElement = document.querySelector('.cart__details-container__lists')!;
    const sumPriceResult = document.querySelectorAll('.sumPriceResult')

    if(!sumPriceResult) throw new Error('no SumPriceResult elements')


        const dataJs = await fetch('/api/users/get-cart-user');
        if(!dataJs) throw new Error('no found dataJs')
        const data = await dataJs.json()
  
        if(data.cart.length !== 0) 
        cartRoot.innerHTML = renderCartProducts(data.cart)
        sumPriceResult.forEach(e=>{
            const element = e as HTMLElement 
                element.innerHTML =  calTotalPrice(data.cart)
        })

    } catch (error) {
        console.error(error)
    }
}

function renderCartProducts(data:any):string{
try {
    const html = data.map((product:any )=>{
        return `
        <li class="cart__details-container__link">
        <div>
            <h4>Name: </h4><span id="cartItemName">${product.product.name}</span>
        </div>
        <div>
            <h4>Detail: </h4><span id="cartItemDetail">${product.product.detail}</span>
        </div>
        <div>
            <h4>Size: </h4><span id="cartItemSize">${product.size} Europe</span>
        </div>
        <div>
            <h4>Price: </h4><span id="cartItemPrice">${product.product.price}$</span>
        </div>
        <div class="container-edit-product-cart">
            <button>      <i class="fa-solid fa-trash-can" onclick="handleClickRemoveFromTheCart('${product.product._id}')"></i></button>
        </div>
    </li>
        `
    }).join('') 
    
    return html
} catch (error) {
    console.error(error);
    return ''
}
}



function calTotalPrice(data:any):string{
try {
    const totalPrice = data.reduce((acc, product) => acc + product.product.price, 0);
    console.log(totalPrice);
    return totalPrice.toString()
} catch (error) {
    console.error(error)
        return ''
}
}