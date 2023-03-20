function handleGetTypeRegister() {
    try {
        var chooseTypeSelect = document.getElementById('chooseTypeSelect');
        if (!chooseTypeSelect)
            throw new Error("The Type Value option not found");
        return chooseTypeSelect.value;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function changeFormByTypeUser(typeUser) {
    try {
        // RESET ALL 
        var form = document.getElementById('formRegister');
        var formInput = form.querySelectorAll('input');
        var formSelect = form.querySelectorAll('select');
        formInput.forEach(function (input) { return input.classList.remove('active'); });
        formSelect.forEach(function (select) { return select.classList.remove('active'); });
        var name = form.querySelector('.name');
        var password = form.querySelector('.password');
        var email = form.querySelector('.email');
        var address = form.querySelector('.address');
        var area = form.querySelector('.area');
        var vehicle = form.querySelector('.vehicle');
        var age = form.querySelector('.age');
        var restaurantType = form.querySelector('.restaurant_type');
        switch (typeUser) {
            case "customer":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                address.classList.add('active');
                break;
            case "restaurant":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                address.classList.add('active');
                restaurantType.classList.add('active');
                break;
            case "courier":
                name.classList.add('active');
                password.classList.add('active');
                email.classList.add('active');
                address.classList.add('active');
                vehicle.classList.add('active');
                age.classList.add('active');
                break;
        }
        var submitBtn = document.querySelector('.register-container__btn-submit');
        submitBtn.classList.add('active');
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmitFormRegister(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, name = _a.name, password = _a.password, email = _a.email, address = _a.address, area = _a.area, vehicle = _a.vehicle, age = _a.age;
        if (!checksIfUserExists(email.value)) {
            switch (handleGetTypeRegister()) {
                case "customer":
                    customers.push(new Customer(name.value, password.value, email.value, address.value));
                    saveInLocalStorage(customers, "customers");
                    break;
                case "restaurant":
                    restaurants.push(new Restaurant(name.value, password.value, email.value, address.value, ev.target.elements.restaurantType.value));
                    saveInLocalStorage(restaurants, "restaurants");
                    break;
                case "courier":
                    couriers.push(new Courier(name.value, password.value, email.value, area.value, vehicle.value, parseInt(age.value)));
                    saveInLocalStorage(couriers, "couriers");
                    break;
            }
            ev.target.reset();
            var newUrl = "./../../../login/login.html";
            window.location.replace(newUrl);
        }
        else {
            alert("the user exist in the system please try anther Email");
        }
    }
    catch (error) {
        console.error(error);
    }
}
function checksIfUserExists(emailUser) {
    try {
        var searchInCustomer = customers.filter(function (customer) { return customer.email === emailUser; });
        var searchInRestaurant = restaurants.filter(function (restaurant) { return restaurant.email === emailUser; });
        var searchInCourier = couriers.filter(function (courier) { return courier.email === emailUser; });
        if (!searchInCustomer)
            console.log("no  inside searchInCustomer");
        if (!searchInRestaurant)
            console.log("no  inside searchInRestaurant");
        if (!searchInCourier)
            console.log("no  inside searchInCourier");
        if ((searchInCustomer === null || searchInCustomer === void 0 ? void 0 : searchInCustomer.length) !== 0 || (searchInRestaurant === null || searchInRestaurant === void 0 ? void 0 : searchInRestaurant.length) !== 0 || (searchInCourier === null || searchInCourier === void 0 ? void 0 : searchInCourier.length) !== 0)
            return true;
        else {
            return false;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function handleLoginPage() {
    try {
        var newUrl = "./../../../login/login.html";
        window.location.replace(newUrl);
    }
    catch (error) {
        console.error(error);
    }
}
