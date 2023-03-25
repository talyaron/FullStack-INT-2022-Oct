var _customer = loggedInCustomer(); //index
if (!_customer)
    throw new Error("no customer found"); //index
var customer = _customer; //index
function renderRestaurants() {
    try {
        var restaurantRoot = document.querySelector("#restaurantRoot");
        if (!restaurantRoot)
            throw new Error("the restaurantRoot no found");
        var html = restaurants.map(function (restaurant) {
            return "\n              <div class=\"container-customer__restaurant-card\">  <img src=\"" + restaurant.imageUrl + "\" class=\"container-customer__img-restaurant\">\n              <h1 class=\"container-customer__title-restaurant\">\n              " + restaurant.name + " \n              </h1>\n                <p>Address: " + restaurant.address + " </p>\n                 <p>Type: " + restaurant.type + " </p>\n             <button class=\"container-customer__btn-restaurant\" onclick=\"handleOpenMenu('" + restaurant.uid + "')\">open menu</button> </div>\n             ";
        }).join(" ");
        restaurantRoot.innerHTML = html;
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderMenu(uid) {
    try {
        var curRes = restaurants.find(function (restaurant) { return restaurant.uid === uid; });
        if (!curRes)
            throw new Error("restaurant not found ");
        var html = "\n        <button class=\"container-customer__menu-close\" onclick=\"handleCloseMenu()\">\n        <i class=\"fa-solid fa-xmark\"></i>\n        </button> \n        <h1 class=\"container-customer__menu-title\">" + curRes.name + " Menu</h1>\n        <div class=\"container-customer__container-courses\">" + renderCourse(uid) + "</div>\n        ";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function renderCourse(uid) {
    try {
        var curRes_1 = restaurants.find(function (restaurant) { return restaurant.uid === uid; });
        if (!curRes_1)
            throw new Error("restaurant not found");
        newOrder(curRes_1);
        var html = curRes_1.menu
            .map(function (course) {
            return " \n            <div class=\"container-customer__courses-card\">\n                <img src=\"" + course.imageUrl + "\" class=\"container-customer__courses-img\">\n                <p class=\"container-customer__courses-card-name\">" + course.name + "</p>\n                <p class=\"container-customer__courses-des\">" + course.description + "</p>\n                <h4 class=\"container-customer__courses-price\">Price:" + course.price + "$</h4>\n                <button class=\"container-customer__courses-btn\" onclick=\"handleAddToOrder('" + curRes_1.uid + "', '" + course.uid + "')\">\n                    <i class=\"fa-solid fa-cart-plus\"></i>\n                </button>\n            </div> ";
        })
            .join(" ");
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function renderCustomerHeader() {
    try {
        var customerHeader = document.querySelector("#customerHeader");
        if (customerHeader)
            customerHeader.innerText = " Welcome " + customer.name;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCart() {
    try {
        var html = customer.orders[customer.orders.length - 1].courses
            .map(function (course) {
            return " \n            <div class=\"container-customer__cart__course\">\n                <img class=\"container-customer__cart__course__img\" src=\"" + course.imageUrl + "\">\n                <div>                <p class=\"container-customer__cart__course__name\">" + course.name + "</p>\n                <p class=\"container-customer__cart__course__price\">Price:" + course.price + "$</p></div>\n                <button class=\"container-customer__cart__course__removeBtn\" onclick=\"handleRemoveFromOrder('" + course.uid + "')\"><i class=\"fa-solid fa-delete-left\"></i></button>\n            </div>\n            ";
        })
            .join(" ");
        renderCartSum();
        return html;
    }
    catch (error) {
        console.error(error);
        return " ";
    }
}
function renderCartSum() {
    try {
        var order = customer.orders[customer.orders.length - 1];
        var sumRoot = document.querySelector("#sumRoot");
        if (sumRoot)
            sumRoot.innerText = "TOTAL: " + order.sum() + "$";
    }
    catch (error) {
        console.error(error);
    }
}
