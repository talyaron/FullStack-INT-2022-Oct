const menuElement = document.querySelector('.menu');

let allProducts = []

async function retrieveAllProducts() {

    await fetch("/products", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
        .then((res) => res.json())
        .then((data) => {
            allProducts = data;
            renderMeals(data)
        });


}

function renderMeals(allProducts): string {
    try {

        let html = `<div class="menu">`

        html += allProducts
            .map((item) => {
                return `
                <br/>
                <div class="menu__meal">
                <div class="menu__meal__img"><img src=${item.imgLink} alt=""></div>
                <div class="menu__meal__details">
                    <div class="menu__meal__details__name">${item.name}</div>
                    <div class="menu__meal__details__detailsWrapper">
                        <div class="menu__meal__details__detailsWrapper__description">${item.details} </div>
                        <div class="menu__meal__details__detailsWrapper__price">${item.price}</div>
                    </div>
                </div>
                <div class="menu__meal__btnAdd">
                    <button onclick="addToCart('${item.uid}')">Add</button>
                </div>
                </div>
            `;
            }).join(" ");


        html += `</div>`
        menuElement.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }

}

retrieveAllProducts()


function addToCart(uid: string) {
    let cart = {};
    const cartStr = localStorage.getItem('cart');
    if (cartStr != null) {
        cart = JSON.parse(cartStr);
    }


    const meal = allProducts.find(element => element.uid == uid);
    if (meal !== undefined) {
        if (meal.name in cart) {
            cart[meal.name]["quantity"] += 1;
        } else {
            cart[meal.name] = { "quantity": 1, "price": meal.price, "imgLink": meal.imgLink, "uid": meal.uid };
        }

        const cartData = JSON.stringify(cart);
        //todo - store in cookies
        localStorage.setItem('cart', cartData);
    }

}
