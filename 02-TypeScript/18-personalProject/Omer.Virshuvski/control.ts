function addItems(item: Product) {
    try {
        const temp = getItems()
        if (temp != null) {
            temp.push(item)
            localStorage.setItem("items", JSON.stringify(temp));
        } else {
            localStorage.setItem("items", JSON.stringify(item));
        }
    } catch (error) {
        console.error(error);

    }
}

function render(ele: string, items: Product[] | null) {
    try {

        const element = document.querySelector(ele.toString());
        if (!element) throw new Error("Element does not exits");


        if (!items) throw new Error("Items empty");
        items.sort((function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        }))
        const html = items.map((item) => {

            return `
            <div class="main__card">
                <div class="main__card__imgDiv"><img src="${item.img}" alt="cart"></div>
                <hr style="margin-bottom: 5px; border: 1px solid #E1D7C6">
                <h3>${item.name}</h3>
                <h4>Price: ${item.price}$</h4>
                <h4>Size: ${item.size}</h4>
                <div style="display: flex; align-items: center;"><h4 style="display: inline-block; margin-right: 3px;">Color:</h4><div style="display: inline-block; background-color: ${item.color}; width: 13px; height: 13px; border-radius: 50%; border: none;"></div></div>
                <button style="display: block;" onclick="deleteProduct('${item.id}')">Delete</button>
            </div>
            `
        }).join("\n");
        console.log(html);

        element.innerHTML = html;

    } catch (error) {
        console.error(error);

    }
}

function renderStore(ele: string, items: Product[] | null) {
    try {

        const element = document.querySelector(ele.toString());
        if (!element) throw new Error("Element does not exits");


        element.innerHTML = "No products at the moment";
        if (items == null || items.length == 0) {
            throw new Error("Items empty");
        }
        const html = items.map((item) => {

            return `
            <div class="main__card">
                <div class="main__card__imgDiv"><img src="${item.img}" alt="cart"></div>
                <hr style="margin-bottom: 5px; border: 1px solid #E1D7C6">
                <h3>${item.name}</h3>
                <h4>Price: ${item.price}$</h4>
                <h4>Size: ${item.size}</h4>
                <div style="display: flex; align-items: center;">
                    <h4 style="display: inline-block; margin-right: 3px;">Color:</h4>
                    <div style="display: inline-block; background-color: ${item.color}; width: 13px; height: 13px; border-radius: 50%; border: none;"></div>
                </div>
                <button onclick="addToCart('${item.id}')">Add To Cart</button>
            </div>
            `
        }).join("\n");
        console.log(html);

        element.innerHTML = html;

    } catch (error) {
        console.error(error);

    }
}

function renderCart(ele: string, items: Product[] | null) {
    try {

        const element = document.querySelector(ele.toString());
        if (!element) throw new Error("Element does not exits");


        element.innerHTML = "No items in cart";
        if (items == null || items.length == 0) {
            throw new Error("Items empty");
        }
        const html = items.map((item) => {

            return `
            <div class="cartMain__card">
                <div class="cartMain__card__imgDiv">
                    <img src="${item.img}" alt="cart">
                </div>
                <div class="cartMain__card__text">
                    <h3>${item.name}</h3>
                    <h4>Price: ${item.price}$</h4>
                    <h4>Size: ${item.size}</h4>
                    <div style="display: flex; align-items: center;"><h4 style="display: inline-block; margin-right: 3px;">Color:</h4><div style="display: inline-block; background-color: ${item.color}; width: 13px; height: 13px; border-radius: 50%; border: none;"></div></div>
                </div>
                <i onclick="deleteFromCart('${item.id}')" class="fa-regular fa-trash-can fa-xl"></i>
            </div>
            `
        }).join("\n");
        console.log(html);

        element.innerHTML = html;

    } catch (error) {
        console.error(error);

    }
}

function deleteProduct(id: string) {
    try {
        const temp = getItems();
        if (!temp) throw new Error("Items empty");
        const i = temp.findIndex((item) => item.id == id.toString());
        if (i == -1) throw new Error("Item not found");
        temp.splice(i, 1)
        localStorage.setItem("items", JSON.stringify(temp));
        render(".test", getItems())
        renderStore(".main", getItems())
        try {
            deleteFromCart(id);
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.error(error);
    }
}

function deleteFromCart(id:string) {
    try {
        const temp = getItemsInCart();
        if (!temp) throw new Error("Items empty");
        const i = temp.findIndex((item) => item.id == id.toString());
        if (i == -1) throw new Error("Item not found");
        temp.splice(i, 1)
        localStorage.setItem("cartItems", JSON.stringify(temp));
        renderCart(".cartMain", getItemsInCart())
        total()
    } catch (error) {
        console.error(error);
    }
}

function addToCart(id: string) {
    try {
        const temp = getItemsInCart();
        const tempItems = getItems();
        if (!tempItems) throw new Error("Items empty");
        const i = tempItems.findIndex((item) => item.id == id.toString());
        if (i == -1) throw new Error("Item not found");


        if (!tempItems[i]) throw new Error("Item empty line 106");
        console.log(typeof temp);

        itemsInCart.classList.remove("hide")
        if (temp != null) {
            temp.push(tempItems[i])
            itemsInCart.innerHTML = temp.length.toString();
            localStorage.setItem("cartItems", JSON.stringify(temp));
        } else {
            itemsInCart.innerHTML = '1';            
            localStorage.setItem("cartItems", JSON.stringify(tempItems[i]));
        }
        renderCart(".cartMain", getItemsInCart());
    } catch (error) {
        console.error(error);
    }
}


sortName.addEventListener('click', () => {
    try {
        const temp = getItems();
        if (!temp) throw new Error("Items empty");

        temp.sort((function (a, b) {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) { return -1; }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) { return 1; }
            return 0;
        }))
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);

    }
})

sortPrice.addEventListener('click', () => {
    try {
        const temp = getItems();
        if (!temp) throw new Error("Items empty");

        temp.sort((a,b)=>a.price-b.price);
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);

    }
})

sortType.addEventListener('click', () => {
    try {
        const temp = getItems();
        if (!temp) throw new Error("Items empty");

        temp.sort((function (a, b) {
            if (a.type > b.type) { return -1; }
            if (a.type < b.type) { return 1; }
            return 0;
        }))
        renderStore(".main", temp)
    } catch (error) {
        console.error(error);

    }
})

ham.forEach(h => {
    h.addEventListener('click', () => {
        try {
            if (!hamTop || !hamMid || !hamBottom || !menu) throw new Error("No elements");
            if (change) {
                hamTop.forEach(t => {
                    t.classList.add("closeTop");
                })
                hamMid.forEach(m => {
                    m.classList.add("closeMid");
                })
                hamBottom.forEach(b => {
                    b.classList.add("closeBottom");
                })
                menu.forEach((m) => {
                    m.classList.add("menuShow")
                })
                change = false;
            } else {
                hamTop.forEach(t => {
                    t.classList.remove("closeTop");
                })
                hamMid.forEach(m => {
                    m.classList.remove("closeMid");
                })
                hamBottom.forEach(b => {
                    b.classList.remove("closeBottom");
                })
                menu.forEach((m) => {
                    m.classList.remove("menuShow")
                })
                change = true;
            }
        } catch (error) {
            console.error(error);

        }
    })
})