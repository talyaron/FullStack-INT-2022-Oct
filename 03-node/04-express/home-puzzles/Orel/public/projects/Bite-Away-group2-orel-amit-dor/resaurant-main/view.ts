const courseRoot = document.querySelector("#courseRoot");


function renderRestaurantHeader() {
    try {
        const restaurantHeader: HTMLElement | null = document.querySelector("#restaurantHeader");

        if (restaurant && restaurantHeader) {
            restaurantHeader.innerText = `${restaurant.name}`
        }
    } catch (error) {
        console.error(error);
    }
}


function renderMenuRest() {
    try {
        const menu = restaurant.menu;
        console.log("restaurant", restaurant)
        const html = menu
            .map((course) => {
                return `
                <div class="container__menu-card">
                <button class="container__menu-update-btn" id="update-${course.uid}" onclick="handleUpdateCourse('${course.uid}')"><i class="fa-solid fa-pen-to-square"></i></button>   
                <button  class="container__menu-save-btn" style="display:none" id="save-${course.uid}" onclick="handleSaveUpdatedCourse('${course.uid}')"><i class="fa-solid fa-circle-check"></i></button>   
                <h3 class="container__menu-card-title" id="upadteName-${course.uid}" contenteditable="false">${course.name}</h3>
                <img class="container__menu-card-img" src="${course.imageUrl}">  
                    <div class="container__menu-card-details">
                        <label>Price:</label>
                        <div id="upadtePrice-${course.uid}" contenteditable="false">${course.price}</div>
                    </div>
                    <div class="container__card-des container__menu-card-details">
                        <label >Description:</label>
                        <div class="container__card-des-des" id="upadteDescription-${course.uid}" contenteditable="false">${course.description}</div>
                    </div>
                    <div class="container__menu-card-details">
                        <label>uid:</label>
                        <div>${course.uid}</div>
                    </div>
                    <button class="container__menu-card-remove-btn" onclick="handleDeleteItem('${course.uid}')">Remove</button>
                </div>
                `;
            })
            .join(" ");
        if (!courseRoot) throw new Error("courseRoot is null");
        courseRoot.innerHTML = html;

    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderActiveOrders() {
    try {
        const activeOrderRoot = document.querySelector("#activeOrderRoot");

        const activeOrders = restaurant.orders.filter((activeOrder) => activeOrder.status !== "initialized" || "Picked" || "Droppped");
console.log(activeOrders)
        const html = activeOrders
            .map((order) => {
 
                return `

                <div class="container__active-order-card">
                    <div class="container__active-order-details">
                    <span>customer uid:</span> 
                    ${order.customerId}
                    </div>
                    <div class="container__active-order-details">
                    <span>order uid:</span>
                     ${order.uid}</div>
                    <div class="container__active-order-details">
                    <span>order destination:</span> 
                    ${order.destination}</div>
                    <div id="coursesRoot" class="container__active-order-details">
                    <span>courses:</span>
                     ${(JSON.stringify(order.instanceCounter())).slice(1, -1)} </div>
                    <div id="SumRoot" class="container__active-order-details">
                    <span>sum:</span> 
                    ${order.sum()} </div>
                    <button  onclick="handleUpdateStatus('${order.uid}')">${order.status}</button>
                </div>
        
                `
            })
            .join(" ");
        if (!activeOrderRoot) throw new Error("activeOrderRoot was not found");
        activeOrderRoot.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


function renderRestaurantProfileImage() {
    try {
        const restaurantImage: HTMLElement | null = document.querySelector("#restaurantProfileImageRoot");

        if (restaurant && restaurantImage) {
            restaurantImage.innerHTML = `
            <img class="menu__course__image" src="${restaurant.imageUrl}">
            `
        }
    } catch (error) {
        console.error(error);
    }
}

