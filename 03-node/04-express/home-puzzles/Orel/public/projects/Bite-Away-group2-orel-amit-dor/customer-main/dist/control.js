function handleOpenMenu(uid) {
    try {
        var menu = document.querySelector("#menuRoot");
        if (!menu)
            throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid);
        menu.style.display = "block";
        var submitOrderBtn = document.querySelector("#submitOrderBtn");
        if (submitOrderBtn)
            submitOrderBtn.style.backgroundColor = "green";
    }
    catch (error) {
        console.error(error);
    }
}
function handleCloseMenu() {
    try {
        if (confirm("if you close the menu your order will be lost") === true) {
            var menu = document.querySelector("#menuRoot");
            if (!menu)
                throw new Error("could not find root");
            menu.style.display = " none";
            menu.innerHTML = "";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function newOrder(curRes) {
    try {
        customer.orders.push(new Order(customer.uid + "-" + curRes.uid + "-" + Date.now().toString(), curRes.uid, customer.uid, undefined, undefined, "initialized"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToOrder(curResUid, courseUid) {
    try {
        var order = customer.orders[customer.orders.length - 1];
        console.log("order after add", order);
        if (!order)
            throw new Error("order not found");
        var curRes = restaurants.find(function (rest) { return rest.uid === curResUid; });
        if (!curRes)
            throw new Error("restaurant not found");
        var course = curRes.menu.find(function (order) { return order.uid === courseUid; });
        if (!course)
            throw new Error("course not found");
        order.courses.push(course);
        var cartRoot = document.querySelector("#cartRoot");
        if (!cartRoot)
            throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmitOrder() {
    try {
        var order_1 = customer.orders[customer.orders.length - 1];
        if (!order_1) {
            alert("add new courses by selecting a restaurant menu");
        }
        else if ((!Array.isArray(order_1.courses)) || (!order_1.courses.length)) {
            alert("your order is empty");
        }
        else if (order_1.status) {
            if (order_1.status === "submitted") {
                alert("your order has alreay been sent");
            }
            else {
                if (order_1.status === "initialized")
                    order_1.status = "submitted";
                if (order_1.destination === undefined)
                    order_1.destination = customer.address;
                saveInLocalStorage(customers, "customers");
                var curRes = restaurants.find(function (rest) { return rest.uid === order_1.restaurantId; });
                if (!curRes)
                    throw new Error("restaurant not found");
                curRes.orders.push(order_1);
                saveInLocalStorage(restaurants, "restaurants");
                var submitOrderBtn = document.querySelector("#submitOrderBtn");
                if (submitOrderBtn)
                    submitOrderBtn.style.display = "none";
                var cartRoot = document.querySelector("#cartRoot");
                if (!cartRoot)
                    throw new Error("cart root not found");
                cartRoot.innerHTML = "<div>your order has been sent to the restaurant</div>";
            }
        }
        else {
            alert("you alreay have a submitted order");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearch() {
    try {
        var userInput = document.querySelector("#userInput");
        var noResults_1 = document.querySelector("#noResultsRoot");
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("input", function (search) {
            var userInputValue = search.target.value;
            userInputValue = userInputValue.toLocaleLowerCase();
            var results = document.querySelectorAll(".container-customer__restaurant-card");
            for (var i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    results[i].style.display = "";
                    noResults_1.style.display = "none";
                }
                else {
                    results[i].style.display = "none";
                }
            }
            var allrestaurants = document.querySelectorAll(".container-customer__result");
            for (var i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults_1) {
                    noResults_1.style.display = "";
                    noResults_1.innerHTML = "<div class=\"container-customer__result-root\">Sorry, there isn't a restaurant that icludes <u><b>" + userInputValue + "</b></u> on Bite Away...</div>";
                }
            }
        });
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
function handleRemoveFromOrder(uid) {
    try {
        var curOrder = customer.orders[customer.orders.length - 1];
        var index = curOrder.courses.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        curOrder.courses.splice(index, 1);
        var cartRoot = document.querySelector("#cartRoot");
        if (!cartRoot)
            throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickCloseCart() {
    var cartContainer = document.querySelector('.container-customer__cart');
    cartContainer.classList.remove("active");
}
function handleClickOpenCart() {
    var cartContainer = document.querySelector('.container-customer__cart');
    cartContainer.classList.add("active");
}
