//--------------------------------------------------------- INDEX
const _courier = loggedInCourier();
if(!_courier) throw new Error("no _courier found");
const courier = _courier;
//---------------------------------------------------------

function renderCourierHeader() {
    try {
        const courierHeader: HTMLElement | null = document.querySelector("#courierHeader"); 

        if (courier && courierHeader) {
            courierHeader.innerText = `hello ${courier.name}`    
        }
    } catch (error) {
        console.error(error);
    }
}

function renderDroppedOrders() {
    try {
        const delieveryPool = document.querySelector("#droppedOrdersRoot");
        const droppedOrders = droppedOrdersList();
       
        if (delieveryPool) {
           let html = droppedOrders
           .map ((droppedOrders) =>{
                return `
                <div class="main__drop-card">
                    <h1><span>name:</span> ${droppedOrders.name} </h1>
                    <h1><span>restId:</span>  ${droppedOrders.restaurantId} </h1>
                    <h3> <span>destination:</span> ${droppedOrders.destination} </h3>
                    <h3"><span>status:</span> ${droppedOrders.status} </h3>
                </div>
                `;
                
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}

function renderActiveOrders() {
    try {
        const delieveryPool = document.querySelector("#activeOrdersRoot");

        const activeOrders = courier.orders.filter(orders => orders.status === "Picked");

        if (delieveryPool) {
           let html = activeOrders
           .map ((activeOrder) =>{
                return `
                <div class="main__card">
                    <h1 class="main__card-name" >name: ${activeOrder.name} </h1>
                    <h1 class="main__card-restaurant">restaurantId: ${activeOrder.restaurantId} </h1>
                    <h1  class="main__card-order-id" style="display:none;">orderId: ${activeOrder.uid} </h1>
                    <h3 class="main__card-des"> destination: ${activeOrder.destination} </h3>
                    <h3 class="main__card-status">status: ${activeOrder.status} </h3>
                    <button onclick="handleDropOrder('${activeOrder.customerId}')">Drop</button>
                </div>
                `;  
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}

function renderPool() {
    try {
        
        const delieveryPool = document.querySelector("#openOrdersRoot");
        if (delieveryPool) {
           let html = orderPool
           .map ((order) =>{
                return `
                <div class="main__card">
                    <h1  class="main__card-name"> <span>name: </span>${order.name} </h1>
                    <h1 class="main__card-restaurant"> <span>restaurant-ID:</span> ${order.restaurantId} </h1>
                    <h1  class="main__card-order-id"><span> order-ID:</span> ${order.uid} </h1>
                    <h3  class="main__card-des"> <span>destination:</span> ${order.destination} </h3>
                    <h3 class="main__card-status"> <span>status:</span> ${order.status} </h3>
                    <button  onclick="handlePickupOrder('${order.uid}')" class="pickupBtn">Pick Up</button>
                </div>
                `;
            })
            .join(" ");
            delieveryPool.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}


//---------------------------------------------------------- VIEW
const courierId = document.querySelectorAll("#courierId");
const delieveryPool = document.querySelectorAll("#delieveryPool");





