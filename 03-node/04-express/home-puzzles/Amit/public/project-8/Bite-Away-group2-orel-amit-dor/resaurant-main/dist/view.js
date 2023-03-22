var courseRoot = document.querySelector("#courseRoot");
function renderRestaurantHeader() {
    try {
        var restaurantHeader = document.querySelector("#restaurantHeader");
        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = "" + restaurant.name;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderMenuRest() {
    try {
        var menu = restaurant.menu;
        console.log("restaurant", restaurant);
        var html = menu
            .map(function (course) {
            return "\n                <div class=\"container__menu-card\">\n                <button class=\"container__menu-update-btn\" id=\"update-" + course.uid + "\" onclick=\"handleUpdateCourse('" + course.uid + "')\"><i class=\"fa-solid fa-pen-to-square\"></i></button>   \n                <button  class=\"container__menu-save-btn\" style=\"display:none\" id=\"save-" + course.uid + "\" onclick=\"handleSaveUpdatedCourse('" + course.uid + "')\"><i class=\"fa-solid fa-circle-check\"></i></button>   \n                <h3 class=\"container__menu-card-title\" id=\"upadteName-" + course.uid + "\" contenteditable=\"false\">" + course.name + "</h3>\n                <img class=\"container__menu-card-img\" src=\"" + course.imageUrl + "\">  \n                    <div class=\"container__menu-card-details\">\n                        <label>Price:</label>\n                        <div id=\"upadtePrice-" + course.uid + "\" contenteditable=\"false\">" + course.price + "</div>\n                    </div>\n                    <div class=\"container__card-des container__menu-card-details\">\n                        <label >Description:</label>\n                        <div class=\"container__card-des-des\" id=\"upadteDescription-" + course.uid + "\" contenteditable=\"false\">" + course.description + "</div>\n                    </div>\n                    <div class=\"container__menu-card-details\">\n                        <label>uid:</label>\n                        <div>" + course.uid + "</div>\n                    </div>\n                    <button class=\"container__menu-card-remove-btn\" onclick=\"handleDeleteItem('" + course.uid + "')\">Remove</button>\n                </div>\n                ";
        })
            .join(" ");
        if (!courseRoot)
            throw new Error("courseRoot is null");
        courseRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderActiveOrders() {
    try {
        var activeOrderRoot = document.querySelector("#activeOrderRoot");
        var activeOrders = restaurant.orders.filter(function (activeOrder) { return activeOrder.status !== "initialized" || "Picked" || "Droppped"; });
        console.log(activeOrders);
        var html = activeOrders
            .map(function (order) {
            return "\n\n                <div class=\"container__active-order-card\">\n                    <div class=\"container__active-order-details\">\n                    <span>customer uid:</span> \n                    " + order.customerId + "\n                    </div>\n                    <div class=\"container__active-order-details\">\n                    <span>order uid:</span>\n                     " + order.uid + "</div>\n                    <div class=\"container__active-order-details\">\n                    <span>order destination:</span> \n                    " + order.destination + "</div>\n                    <div id=\"coursesRoot\" class=\"container__active-order-details\">\n                    <span>courses:</span>\n                     " + (JSON.stringify(order.instanceCounter())).slice(1, -1) + " </div>\n                    <div id=\"SumRoot\" class=\"container__active-order-details\">\n                    <span>sum:</span> \n                    " + order.sum() + " </div>\n                    <button  onclick=\"handleUpdateStatus('" + order.uid + "')\">" + order.status + "</button>\n                </div>\n        \n                ";
        })
            .join(" ");
        if (!activeOrderRoot)
            throw new Error("activeOrderRoot was not found");
        activeOrderRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderRestaurantProfileImage() {
    try {
        var restaurantImage = document.querySelector("#restaurantProfileImageRoot");
        if (restaurant && restaurantImage) {
            restaurantImage.innerHTML = "\n            <img class=\"menu__course__image\" src=\"" + restaurant.imageUrl + "\">\n            ";
        }
    }
    catch (error) {
        console.error(error);
    }
}
