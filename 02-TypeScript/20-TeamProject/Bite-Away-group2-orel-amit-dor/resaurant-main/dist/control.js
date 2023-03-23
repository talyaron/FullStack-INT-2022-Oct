function handleAddCourse(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.valueAsNumber;
        var description = ev.target.elements.description.value;
        var imageUrl = ev.target.elements.imageUrl.value;
        restaurant.menu.push(new Course(name, price, description, imageUrl));
        saveMenu(restaurant.uid, restaurant.menu);
        ev.target.reset();
        renderMenuRest();
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteItem(uid) {
    try {
        var index = restaurant.menu.findIndex(function (item) { return item.uid === uid; });
        if (index === -1)
            throw new Error("course not found");
        restaurant.menu.splice(index, 1);
        if (!courseRoot)
            throw new Error("courseRoot is undefined");
        renderMenuRest();
        saveMenu(restaurant.uid, restaurant.menu);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateStatus(uid) {
    try {
        var order = restaurant.orders.find(function (order) { return order.uid === uid; });
        if (!order)
            throw new Error("order not found");
        order.status = "ready";
        orderPool.push(order);
        saveInLocalStorage(restaurants, "restaurants");
        saveInLocalStorage(orderPool, "orderPool");
        renderActiveOrders();
        console.log("rest", restaurants);
        console.log("orderPool", orderPool);
    }
    catch (error) {
        console.error(error);
    }
}
function handleRestaurantProfileImage(ev) {
    try {
        ev.preventDefault();
        var imageUrl = ev.target.elements.imageUrl.value;
        restaurant.imageUrl = imageUrl;
        saveInLocalStorage(restaurants, "restaurants");
        ev.target.reset();
        renderRestaurantProfileImage();
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateCourse(uid) {
    try {
        var course = restaurant.menu.find(function (course) { return course.uid === uid; });
        if (!course)
            throw new Error("course not found");
        var courseDataName = document.querySelector("#upadteName-" + course.uid);
        var courseDataPrice = document.querySelector("#upadtePrice-" + course.uid);
        var courseDataDescription = document.querySelector("#upadteDescription-" + course.uid);
        if (!courseDataName)
            throw new Error("course Data Name not found");
        if (!courseDataPrice)
            throw new Error("course Data Price not found");
        if (!courseDataDescription)
            throw new Error("course Data Description not found");
        courseDataName.contentEditable = "true";
        courseDataPrice.contentEditable = "true";
        courseDataDescription.contentEditable = "true";
        courseDataName.style.color = "blue";
        courseDataPrice.style.color = "blue";
        courseDataDescription.style.color = "blue";
        var updateButton = document.querySelector("#update-" + course.uid);
        if (!updateButton)
            throw new Error("update Button not found");
        updateButton.style.display = "none";
        var saveButton = document.querySelector("#save-" + course.uid);
        if (!saveButton)
            throw new Error("save Button not found");
        saveButton.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveUpdatedCourse(uid) {
    try {
        var course = restaurant.menu.find(function (course) { return course.uid === uid; });
        if (!course)
            throw new Error("course not found");
        var courseDataName = document.querySelector("#upadteName-" + course.uid);
        var courseDataPrice = document.querySelector("#upadtePrice-" + course.uid);
        var courseDataDescription = document.querySelector("#upadteDescription-" + course.uid);
        if (!courseDataName)
            throw new Error("course Data Name not found");
        if (!courseDataPrice)
            throw new Error("course Data Price not found");
        if (!courseDataDescription)
            throw new Error("course Data Description not found");
        course.name = courseDataName.innerText;
        course.price = parseInt(courseDataPrice.innerText);
        course.description = courseDataDescription.innerText;
        saveInLocalStorage(restaurants, "restaurants");
        var updateButton = document.querySelector("#update-" + course.uid);
        if (!updateButton)
            throw new Error("update Button not found");
        updateButton.style.display = "block";
        var saveButton = document.querySelector("#save-" + course.uid);
        if (!saveButton)
            throw new Error("save Button not found");
        saveButton.style.display = "none";
        courseDataName.contentEditable = "false";
        courseDataPrice.contentEditable = "false";
        courseDataDescription.contentEditable = "false";
        courseDataName.style.color = "black";
        courseDataPrice.style.color = "black";
        courseDataDescription.style.color = "black";
    }
    catch (error) {
        console.error(error);
    }
}
function handleOpenForm() {
    try {
        var menuForm = document.querySelector('.container__formMenu');
        var btn = document.querySelector('.container__collapse-formMenu');
        menuForm.classList.toggle('active');
        if (menuForm.classList.contains("active")) {
            btn.style.rotate = "180deg";
            btn.style.top = "0";
        }
        else {
            btn.style.rotate = "0deg";
            btn.style.top = "50%";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickActiveOrder() {
    try {
        var activeOrderDiv = document.querySelector('.active-orders');
        var activeOrderContainer = document.querySelector('.container__active-order-box');
        activeOrderDiv === null || activeOrderDiv === void 0 ? void 0 : activeOrderDiv.classList.toggle('active');
        if (activeOrderDiv === null || activeOrderDiv === void 0 ? void 0 : activeOrderDiv.classList.contains('active')) {
            activeOrderContainer.style.display = "flex";
        }
        else {
            activeOrderContainer.style.display = "none";
        }
    }
    catch (error) {
        console.error(error);
    }
}
