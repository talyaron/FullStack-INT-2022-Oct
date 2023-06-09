const _customer = loggedInCustomer(); //index
if (!_customer) throw new Error("no customer found");//index
const customer = _customer;//index

function renderRestaurants(): string {
    try {
        const restaurantRoot: HTMLDivElement | null = document.querySelector("#restaurantRoot");
        if (!restaurantRoot) throw new Error("the restaurantRoot no found")
        const html = restaurants.map(restaurant =>
            `
              <div class="container-customer__restaurant-card">  <img src="${restaurant.imageUrl}" class="container-customer__img-restaurant">
              <h1 class="container-customer__title-restaurant">
              ${restaurant.name} 
              </h1>
                <p>Address: ${restaurant.address} </p>
                 <p>Type: ${restaurant.type} </p>
             <button class="container-customer__btn-restaurant" onclick="handleOpenMenu('${restaurant.uid}')">open menu</button> </div>
             `
        ).join(" ");

        restaurantRoot.innerHTML = html;
        return html;

    }
    catch (error) {
        console.error(error);
        return "";
    }
}

function renderMenu(uid: string): string {
    try {
        const curRes = restaurants.find(restaurant => restaurant.uid === uid);
       
        if (!curRes) throw new Error("restaurant not found ");
        const html = `
        <button class="container-customer__menu-close" onclick="handleCloseMenu()">
        <i class="fa-solid fa-xmark"></i>
        </button> 
        <h1 class="container-customer__menu-title">${curRes.name} Menu</h1>
        <div class="container-customer__container-courses">${renderCourse(uid)}</div>
        `
        return html;

    } catch (error) {
        console.error(error);
        return ''
    }
}

function renderCourse(uid: string): string {
    try {
        const curRes = restaurants.find(restaurant => restaurant.uid === uid);
        if (!curRes) throw new Error("restaurant not found");
        newOrder(curRes);
        const html = curRes.menu
            .map((course) => {
                return ` 
            <div class="container-customer__courses-card">
                <img src="${course.imageUrl}" class="container-customer__courses-img">
                <p class="container-customer__courses-card-name">${course.name}</p>
                <p class="container-customer__courses-des">${course.description}</p>
                <h4 class="container-customer__courses-price">Price:${course.price}$</h4>
                <button class="container-customer__courses-btn" onclick="handleAddToOrder('${curRes.uid}', '${course.uid}')">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div> `;
            })
            .join(" ");

        return html;
    } catch (error) {
        console.error(error);
        return '';
    }
}


function renderCustomerHeader() {
    try {
        const customerHeader: HTMLElement | null = document.querySelector("#customerHeader");
        if (customerHeader) customerHeader.innerText = ` Welcome ${customer.name}`;

    } catch (error) {
        console.error(error);
    }
}

function renderCart(): string {
    try {
        const html = customer.orders[customer.orders.length - 1].courses
            .map((course) => {
                return ` 
            <div class="container-customer__cart__course">
                <img class="container-customer__cart__course__img" src="${course.imageUrl}">
                <div>                <p class="container-customer__cart__course__name">${course.name}</p>
                <p class="container-customer__cart__course__price">Price:${course.price}$</p></div>
                <button class="container-customer__cart__course__removeBtn" onclick="handleRemoveFromOrder('${course.uid}')"><i class="fa-solid fa-delete-left"></i></button>
            </div>
            `
            })
            .join(" ");

        renderCartSum();

        return html;
    } catch (error) {
        console.error(error);
        return " ";
    }
}


function renderCartSum() {
    try {
        const order = customer.orders[customer.orders.length - 1];
        const sumRoot: HTMLElement | null = document.querySelector("#sumRoot");
        if (sumRoot) sumRoot.innerText = `TOTAL: ${order.sum()}$`;
        
    } catch (error) {
        console.error(error);
    }
}




