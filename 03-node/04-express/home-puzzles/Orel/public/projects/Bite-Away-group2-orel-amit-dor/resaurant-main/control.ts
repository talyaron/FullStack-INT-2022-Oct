function handleAddCourse(ev: any) {
    try {
        ev.preventDefault();

        const name = ev.target.elements.name.value as string;
        const price = ev.target.elements.price.valueAsNumber as number;
        const description = ev.target.elements.description.value as string;
        const imageUrl = ev.target.elements.imageUrl.value as string;

        restaurant.menu.push(new Course(name, price, description, imageUrl));

        saveMenu(restaurant.uid, restaurant.menu);

        ev.target.reset();

        renderMenuRest();

    } catch (error) {
        console.error(error);
    }
}


function handleDeleteItem(uid: string) {
    try {
        const index = restaurant.menu.findIndex((item) => item.uid === uid);
        if (index === -1) throw new Error("course not found");
        restaurant.menu.splice(index, 1);

        if (!courseRoot) throw new Error("courseRoot is undefined");
        renderMenuRest();
        saveMenu(restaurant.uid, restaurant.menu);

    } catch (error) {
        console.error(error);
    }
}

function handleUpdateStatus(uid: string) {
    try {
        const order = restaurant.orders.find(order => order.uid === uid);
        if (!order) throw new Error("order not found");

        order.status = "ready";

        orderPool.push(order);

        saveInLocalStorage(restaurants, "restaurants");
        saveInLocalStorage(orderPool, "orderPool");

        renderActiveOrders();

        console.log("rest", restaurants);
        console.log("orderPool", orderPool);

    } catch (error) {
        console.error(error);
    }
}

function handleRestaurantProfileImage(ev: any) {
    try {
        ev.preventDefault();

        const imageUrl = ev.target.elements.imageUrl.value as string;

        restaurant.imageUrl = imageUrl;

        saveInLocalStorage(restaurants, "restaurants");

        ev.target.reset();

        renderRestaurantProfileImage();

    } catch (error) {
        console.error(error);
    }
}



function handleUpdateCourse(uid: string) {
    try {
        const course = restaurant.menu.find(course => course.uid === uid);
        if (!course) throw new Error("course not found");

        const courseDataName: HTMLElement | null = document.querySelector(`#upadteName-${course.uid}`);
        const courseDataPrice: HTMLElement | null = document.querySelector(`#upadtePrice-${course.uid}`);
        const courseDataDescription: HTMLElement | null = document.querySelector(`#upadteDescription-${course.uid}`);

        if (!courseDataName) throw new Error("course Data Name not found");
        if (!courseDataPrice) throw new Error("course Data Price not found");
        if (!courseDataDescription) throw new Error("course Data Description not found");


        courseDataName.contentEditable = "true";
        courseDataPrice.contentEditable = "true";
        courseDataDescription.contentEditable = "true";

        courseDataName.style.color = "blue";
        courseDataPrice.style.color = "blue";
        courseDataDescription.style.color = "blue";

        const updateButton: HTMLElement | null = document.querySelector(`#update-${course.uid}`);
        if (!updateButton) throw new Error("update Button not found");
        updateButton.style.display = "none";

        const saveButton: HTMLElement | null = document.querySelector(`#save-${course.uid}`);
        if (!saveButton) throw new Error("save Button not found");
        saveButton.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}

function handleSaveUpdatedCourse(uid: string) {
    try {

        const course = restaurant.menu.find(course => course.uid === uid);
        if (!course) throw new Error("course not found");

        const courseDataName: HTMLElement | null = document.querySelector(`#upadteName-${course.uid}`);
        const courseDataPrice: HTMLElement | null = document.querySelector(`#upadtePrice-${course.uid}`);
        const courseDataDescription: HTMLElement | null = document.querySelector(`#upadteDescription-${course.uid}`);

        if (!courseDataName) throw new Error("course Data Name not found");
        if (!courseDataPrice) throw new Error("course Data Price not found");
        if (!courseDataDescription) throw new Error("course Data Description not found");

        course.name = courseDataName.innerText;
        course.price = parseInt(courseDataPrice.innerText);
        course.description = courseDataDescription.innerText;

        saveInLocalStorage(restaurants, "restaurants");

        const updateButton: HTMLElement | null = document.querySelector(`#update-${course.uid}`);
        if (!updateButton) throw new Error("update Button not found");
        updateButton.style.display = "block";

        const saveButton: HTMLElement | null = document.querySelector(`#save-${course.uid}`);
        if (!saveButton) throw new Error("save Button not found");
        saveButton.style.display = "none";

        courseDataName.contentEditable = "false";
        courseDataPrice.contentEditable = "false";
        courseDataDescription.contentEditable = "false";

        courseDataName.style.color = "black";
        courseDataPrice.style.color = "black";
        courseDataDescription.style.color = "black";


    } catch (error) {
        console.error(error);
    }
}

function handleOpenForm() {
    try {
        const menuForm: HTMLFormElement | null = document.querySelector('.container__formMenu')!;
        const btn: HTMLButtonElement | null = document.querySelector('.container__collapse-formMenu')!;

        menuForm.classList.toggle('active');
        if (menuForm.classList.contains("active")) {
            btn.style.rotate = "180deg"
            btn.style.top = "0"
        } else {
            btn.style.rotate = "0deg"
            btn.style.top = "50%"
        }
    } catch (error) {
        console.error(error);
    }

}


function handleClickActiveOrder() {
    try {
        const activeOrderDiv: HTMLDivElement | null = document.querySelector('.active-orders');
        const activeOrderContainer: HTMLDivElement | null = document.querySelector('.container__active-order-box');

        activeOrderDiv?.classList.toggle('active');
        if (activeOrderDiv?.classList.contains('active')) {
            activeOrderContainer!.style.display = "flex"
        } else {
            activeOrderContainer!.style.display = "none"
        }
    } catch (error) {
        console.error(error);
    }


}