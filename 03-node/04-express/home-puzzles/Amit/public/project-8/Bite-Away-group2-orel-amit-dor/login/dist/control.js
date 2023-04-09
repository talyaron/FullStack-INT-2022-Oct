// USER SETTING OREL
function checkMatchUserDetails(emailUser, passwordUser) {
    var _a;
    try {
        localStorage.setItem("TypeUser", "");
        var TypeUser = void 0;
        if (findTypeUserLogin(emailUser) === undefined)
            throw new Error("the user not exist");
        var startUid = Number((_a = findTypeUserLogin(emailUser)) === null || _a === void 0 ? void 0 : _a.uid.slice(0, 3));
        if (findTypeUserLogin(emailUser).email === emailUser && findTypeUserLogin(emailUser).password === passwordUser) {
            if (startUid === 100) {
                TypeUser = "customer";
                localStorage.setItem("TypeUser", TypeUser);
                return true;
            }
            else if (startUid === 200) {
                TypeUser = "restaurant";
                localStorage.setItem("TypeUser", TypeUser);
                return true;
            }
            else if (startUid === 300) {
                TypeUser = "courier";
                localStorage.setItem("TypeUser", TypeUser);
                return true;
            }
        }
        else {
            throw new Error("no match in detail user");
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function openMenuLogoutBtn() {
    try {
        var collapseUserLogout_1 = document.querySelector(".user-box-profile-collapse");
        var collapseUserLogoutIcon_1 = document.querySelector(".user-box-profile i");
        var userBoxProfileClick = document.querySelector('.user-box-profile ');
        ;
        userBoxProfileClick === null || userBoxProfileClick === void 0 ? void 0 : userBoxProfileClick.addEventListener('click', function (e) {
            collapseUserLogout_1.classList.toggle('active');
            if (collapseUserLogout_1.classList.contains('active')) {
                collapseUserLogoutIcon_1.style.rotate = '180deg';
            }
            else {
                collapseUserLogoutIcon_1.style.rotate = '0deg';
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function insideTheUser() {
    try {
        if (localStorage.getItem("userLogIn") === "true") {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function findTypeUserLogin(email) {
    try {
        var searchInCustomer = customers.find(function (customer) { return customer.email === email; });
        var searchInRestaurant = restaurants.find(function (restaurant) { return restaurant.email === email; });
        var searchInCourier = couriers.find(function (courier) { return courier.email === email; });
        if (searchInCustomer) {
            localStorage.setItem("userCur", JSON.stringify(searchInCustomer));
            return searchInCustomer;
        }
        else if (searchInRestaurant) {
            localStorage.setItem("userCur", JSON.stringify(searchInRestaurant));
            return searchInRestaurant;
        }
        else if (searchInCourier) {
            localStorage.setItem("userCur", JSON.stringify(searchInCourier));
            return searchInCourier;
        }
        else {
            throw new Error("the User not found");
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
// LOGIN 
function handleSubmitLogIn(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, email = _a.email, password = _a.password;
        console.log(email, password);
        var errorMsgEmailInputLog = document.getElementById('errorMsgEmailInputLOG');
        var errorMsgPasswordInputLog = document.getElementById('errorMsgPasswordInputLOG');
        if (email.value == '') {
            errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address.";
            errorMsgEmailInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgEmailInputLog.parentElement.classList.remove("empty");
        }
        if (password.value == '') {
            errorMsgPasswordInputLog.innerText = "Please enter your password.";
            errorMsgPasswordInputLog.parentElement.classList.add("empty");
            return;
        }
        else {
            errorMsgPasswordInputLog.parentElement.classList.remove("empty");
        }
        if (checkMatchUserDetails(email.value, password.value)) {
            directToCurTypePage();
            ev.target.reset();
        }
        else {
            var textWarning = document.getElementById('pNotLoginSucc');
            textWarning.innerHTML =
                "\n             <i class=\"fa-solid fa-triangle-exclamation\"></i>\n              The email or password not match!\n              ";
            textWarning.style.color = "red";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function logOut() {
    try {
        localStorage.setItem("userLogIn", "false");
    }
    catch (error) {
        console.error(error);
    }
}
function directToCurTypePage() {
    if (getInfoFromStorageType() === "customer") {
        var newUrl = "./../customer-main/customer-main.html";
        window.location.replace(newUrl);
    }
    else if (getInfoFromStorageType() === "restaurant") {
        var newUrl = "./../resaurant-main/restaurant-main.html";
        window.location.replace(newUrl);
    }
    else if (getInfoFromStorageType() === "courier") {
        var newUrl = "./../courier-main/courier.html";
        window.location.replace(newUrl);
    }
}
