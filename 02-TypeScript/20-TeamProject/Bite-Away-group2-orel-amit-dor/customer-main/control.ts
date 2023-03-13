function handleOpenMenu(uid: string) {
    try {
        const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
        if (!menu) throw new Error("could not find menu");
        menu.innerHTML = renderMenu(uid);
        menu.style.display = "block";

        const submitOrderBtn: HTMLDivElement | null = document.querySelector("#submitOrderBtn");
        if (submitOrderBtn) submitOrderBtn.style.backgroundColor = "green";
    } catch (error) {
        console.error(error);
    }
}


function handleCloseMenu() {
    try {
        if (confirm("if you close the menu your order will be lost") === true) {
            const menu: HTMLElement = document.querySelector(`#menuRoot`)!;
            if (!menu) throw new Error("could not find root");
            menu.style.display = " none";
            menu.innerHTML = "";
        }
    } catch (error) {
        console.error(error);
    }
}

function newOrder(curRes: Restaurant) {
    try {
        customer.orders.push(new Order(`${customer.uid}-${curRes.uid}-${Date.now().toString()}`, curRes.uid, customer.uid, undefined, undefined, "initialized"));

    } catch (error) {
        console.error(error);
    }
}


function handleAddToOrder(curResUid: string, courseUid: string) {
    try {
        const order = customer.orders[customer.orders.length - 1];
        console.log("order after add", order);
        if (!order) throw new Error("order not found")
        const curRes = restaurants.find(rest => rest.uid === curResUid);
        if (!curRes) throw new Error("restaurant not found");

        const course = curRes.menu.find(order => order.uid === courseUid);
        if (!course) throw new Error("course not found");

        order.courses.push(course);

        const cartRoot: HTMLElement | null = document.querySelector("#cartRoot");
        if (!cartRoot) throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();

    } catch (error) {
        console.error(error);
    }
}

function handleSubmitOrder() {
    try {
        const order = customer.orders[customer.orders.length - 1];

        if (!order) {
            alert("add new courses by selecting a restaurant menu");

        } else if ((!Array.isArray(order.courses)) || (!order.courses.length)) {
            alert("your order is empty");

        } else if (order.status) {
            if (order.status === "submitted") {
                alert("your order has alreay been sent");
            } else {
                if (order.status === "initialized") order.status = "submitted";
                if (order.destination === undefined) order.destination = customer.address;

                saveInLocalStorage(customers, "customers");

                const curRes = restaurants.find(rest => rest.uid === order.restaurantId);
                if (!curRes) throw new Error("restaurant not found");

                curRes.orders.push(order);
                saveInLocalStorage(restaurants, "restaurants");

                const submitOrderBtn: HTMLDivElement | null = document.querySelector("#submitOrderBtn");
                if (submitOrderBtn) submitOrderBtn.style.display = "none";

                const cartRoot: HTMLElement | null = document.querySelector("#cartRoot");
                if (!cartRoot) throw new Error("cart root not found");
                cartRoot.innerHTML =  `<div>your order has been sent to the restaurant</div>`;
            }
        } else {
            alert("you alreay have a submitted order");
        }

    } catch (error) {
        console.error(error);
    }

}

function handleSearch(): void {
    try {
        const userInput: Element | null = document.querySelector("#userInput");
        const noResults: HTMLDivElement | null = document.querySelector("#noResultsRoot");

        userInput?.addEventListener("input", (search) => {
            let userInputValue = (search.target as HTMLInputElement).value
            userInputValue = userInputValue.toLocaleLowerCase();

            let results = document.querySelectorAll<HTMLElement>(".container-customer__restaurant-card");
            for (let i = 0; i < results.length; i++) {
                if (results[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    results[i].style.display = "";
                    noResults.style.display = "none";
                } else {
                    results[i].style.display = "none";
                }
            }

            let allrestaurants = document.querySelectorAll<HTMLElement>(".container-customer__result");
            for (let i = 0; i < results.length; i++) {
                if (!allrestaurants[i].innerText.toLowerCase().includes(userInputValue) && noResults) {
                    noResults.style.display = "";
                    noResults.innerHTML = `<div class="container-customer__result-root">Sorry, there isn't a restaurant that icludes <u><b>${userInputValue}</b></u> on Bite Away...</div>`;
                }
            }
        }
        );
    } catch (error) {
        console.error(error);
        return error;
    }
}

function handleRemoveFromOrder(uid: string) {
    try {
        const curOrder = customer.orders[customer.orders.length-1];
        const index = curOrder.courses.findIndex((item) => item.uid === uid);
        if (index === -1) throw new Error("course not found");

        curOrder.courses.splice(index, 1);

        const cartRoot: HTMLElement | null = document.querySelector("#cartRoot");
        if (!cartRoot) throw new Error("cart root not found");
        cartRoot.innerHTML = renderCart();

    } catch (error) {
        console.error(error);
    }
}

function handleClickCloseCart(){
    const cartContainer:HTMLDivElement|null = document.querySelector('.container-customer__cart')!;
        cartContainer.classList.remove("active")

}
function handleClickOpenCart(){
    const cartContainer:HTMLDivElement|null = document.querySelector('.container-customer__cart')!;
        cartContainer.classList.add("active")

}