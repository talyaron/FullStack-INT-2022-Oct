const pickUpBtns = document.querySelectorAll('.pick-up-btn');



function handlePickupOrder(uid: string) {
    try {
        const lastOrder = courier.orders.length;
        console.log("lastOrder", lastOrder);
        
        if ((lastOrder === 0) || (courier.orders[lastOrder-1].status !== "Picked")) {
            const order = orderPool.find(order => order.uid === uid);
            const orderIndex = orderPool.findIndex(order => order.uid === uid);
            if (orderIndex === -1) throw new Error("order not found");
            if (!order) throw new Error("order not found");
            courier.orders.push(order);
            orderPool.splice(orderIndex, 1);
            courier.orders[lastOrder].status = "Picked";
            console.log("courier.orders[lastOrder].status", courier.orders[lastOrder].status);
            saveInLocalStorage(orderPool, "orderPool");
            saveInLocalStorage(couriers, "couriers");

            renderPool();
            renderActiveOrders();

        }
        else {
            alert("You already have an active order")
        }

    } catch (error) {
        console.log(error);

    }
};

function handleDropOrder() {
    try {
        const lastOrder = courier.orders.length-1;
        const activeOrder = courier.orders[lastOrder];
       

        const customer = customers.find(customer => customer.uid === activeOrder.customerId);
        if (!customer) throw new Error("no customer found");
        const customerActiveOrder = customer.orders.find(activeOrder => activeOrder.uid === activeOrder.uid);
        if (!customerActiveOrder) throw new Error("no customer order found");
        activeOrder.status = "Dropped";
        customerActiveOrder.status = "Dropped";
        const activeOrdersRoot = document.querySelector("#activeOrdersRoot");
        if (!activeOrdersRoot) throw new Error("active orders root not found");
        activeOrdersRoot.innerHTML = " ";
        saveInLocalStorage(customers, "customers");
        saveInLocalStorage(couriers, "couriers");
        renderDroppedOrders();
    } catch (error) {
        console.log(error);
    }
}

function droppedOrdersList() {
    const dropped = courier.orders.filter(orders => orders.status === "Dropped");
    return dropped;
}