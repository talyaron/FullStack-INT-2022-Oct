function goToHomePage() {
    try {
        if (!homeLink)
            throw new Error("We can't show the customer page");
        homeLink.click();
    }
    catch (error) {
        console.error("The system failed");
    }
}
function calculateTotalOrder() {
    try {
        var cartStr = localStorage.getItem('cart');
        if (!cartStr) {
            throw new Error("We can't show the customer page");
        }
        var cartObj = JSON.parse(cartStr);
        var sum_1 = 0;
        Object.entries(cartObj).forEach(function (_a) {
            var itemName = _a[0], item = _a[1];
            sum_1 += item.price * item.quantity;
        });
        if (!total) {
            throw new Error("We can't show the customer page");
        }
        total.innerHTML = " Total to pay: " + sum_1 + " ILS ";
    }
    catch (error) {
        console.error("we can not show the total to pay");
    }
}
function takeawayChecked() {
    if (!adress || !restaurantSelectList)
        throw new Error("there is no payment form");
    restaurantList.map(function (element, key) {
        restaurantSelectList[key] = new Option(element.name + ", " + element.address, element.name);
    });
    restaurantSelectList.style.display = "block";
    adress.innerHTML = "  \n  <input type=\"submit\" value=\"Next\" class=\"btn\">";
}
function deliverChecked() {
    if (!adress || !restaurantSelectList)
        throw new Error("there is no payment form");
    restaurantSelectList.style.display = "none";
    adress.innerHTML = "\n    <input type=\"text\" name=\"customerAdress\" class=\"input\" placeholder=\"Enter your full adress\" required/>\n    <input type=\"submit\" value=\"Next\" class=\"btn\">\n    ";
}
function showPaymentForm(e) {
    try {
        e.preventDefault();
        if (!paymentChoice)
            throw new Error("there is no payment form");
        paymentChoice.innerHTML = "\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"option1\" onclick=\"visaCardChecked()\"/>\n    <label for=\"choice1\">Visa Card</label>\n    <input type=\"radio\" name=\"payment\" class=\"input\" id=\"option2\" onclick=\"cashChecked()\"/>\n    <label for=\"choice2\">Cash</label>\n    ";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function visaCardChecked() {
    try {
        if (!paymentDetail)
            throw new Error("there is no payment form");
        paymentDetail.innerHTML = "\n        <div class=\"cardDetails\">\n        <input type=\"text\" name=\"cardNumber\" class=\"input\" id=\"cardNumber\" minlength = \"16\" maxlength = \"16\" placeholder=\"Enter your card number\" required/>\n        <input type=\"month\" name=\"cardExpired\" class=\"input\" id=\"cardEDate\" min=\"2023-03\" max=\"2033-12\" required/>\n        <input type=\"text\" name=\"cardCvv\" class=\"input\" id=\"cardCvv\" minlength = \"3\" maxlength = \"3\" placeholder=\"Enter your cvv number\" required/>\n        <input type=\"text\" name=\"customerId\" class=\"input\" id=\"id\" minlength = \"9\" maxlength = \"9\" placeholder=\"Enter your id number\" required/>\n        </div>\n        <input type=\"submit\" value=\"Pay\" class=\"btn\">\n        ";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function cashChecked() {
    try {
        if (!paymentDetail)
            throw new Error("there is no payment form");
        paymentDetail.innerHTML = "<input type=\"submit\" value=\"Pay\" class=\"btn\">";
    }
    catch (error) {
        console.error("something don't work with the load of the customer details");
    }
}
function pay(event) {
    try {
        event.preventDefault();
        alert('Thank You For Your Command');
        localStorage.removeItem('cart');
        goToHomePage();
    }
    catch (error) {
        console.error("The system failed");
    }
}
