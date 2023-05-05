import { Product } from "../API/product/productModel";
import { LogIn } from "../API/user/userModel";

function showPassword() {
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    const password = document.getElementById("password");

    if (checkbox.checked) {
        (password as HTMLInputElement).type = "text";
    } else {
        (password as HTMLInputElement).type = "password";
    }
}

async function signUp(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        const role = ev.target.elements.role.value;
        const response = await fetch("/api/user/add-user", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password, role }),
        });

        const result = await response.json();
        console.log("Success:", result);
        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}

async function logIn(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        const response = await fetch("/api/user/log-in", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        });

        const result = await response.json();
        console.log("Success:", result);
        if (!result) {
            alert("Name or password are inccorect")
        } else if ((result as LogIn).role == "Admin") {
            window.location.href = "./product.html"
        } else {
            window.location.href = "./store.html"
        }
        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}

async function welcome() {
    try {
        const response = await fetch("/api/user/user-from-cookie");
        const jsonData = await response.json();
        console.log(jsonData);
        const user = jsonData as LogIn;
        const display = document.getElementById("name");
        if (!display) throw new Error("No div found");
        const html = `
            <h2>Welcome ${user.name}</h2>
        `
        display.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function addProduct(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const type = ev.target.elements.type.value;
        const price = ev.target.elements.price.value;
        const img = ev.target.elements.img.value;
        const response = await fetch("/api/product/add-product", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, type, price, img }),
        });

        const result = await response.json();
        console.log("Success:", result);
        ev.target.reset();
    } catch (error) {
        console.error(error);
    }
}

async function renderProducts() {
    try {
        const response = await fetch("/api/product/get-products");
        const jsonData = await response.json();
        console.log(jsonData);
        const products = jsonData as Product[]
        const display = document.getElementById("allProducts");
        if (!display) throw new Error("No div found");
        const html = products.map((pro) => {
            return `
                <div class="card">
                    <img src="${pro.img}" alt="${pro.type}">
                    <h3>${pro.name}</h3>
                    <h4>${pro.price}$</h4>
                </div>
            `
        }).join(" ")
        display.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function renderProductsForCustomers() {
    try {
        const response = await fetch("/api/product/get-products");
        const jsonData = await response.json();
        console.log(jsonData);
        const products = jsonData as Product[]
        const display = document.getElementById("allProducts");
        if (!display) throw new Error("No div found");
        const html = products.map((pro) => {
            return `
                <div class="card">
                    <img src="${pro.img}" alt="${pro.type}">
                    <h3>${pro.name}</h3>
                    <h4>${pro.price}$</h4>
                    <button onclick="addProductToCustomer('${pro._id}')">Add</button>
                </div>
            `
        }).join(" ")
        display.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function addProductToCustomer(productId: string) {
    try {
        const response = await fetch("/api/user/user-from-cookie");
        const jsonData = await response.json();
        console.log(jsonData);
        const user = jsonData as LogIn;
        const userId = user._id;
        const userName = user.name;

        const response1 = await fetch("/api/user-product/add-user-product", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName, userId, productId }),
        });

        const result = await response1.json();
        console.log("Success:", result);
    } catch (error) {
        console.error(error);
    }
}

async function renderWish() {
    try {
        const response = await fetch("/api/user-product/get-user-product");
        const jsonData = await response.json();
        console.log(jsonData);
        const products = jsonData as Product[];
        const display = document.getElementById("wishMain");
        if (!display) throw new Error("No div found");
        if (products) {
            const html = products.map((pro) => {
                return `
                    <div class="card">
                        <img src="${pro.img}" alt="${pro.type}">
                        <h3>${pro.name}</h3>
                        <h4>${pro.price}$</h4>
                        <button onclick="deleteProductToCustomer('${pro._id}')">Delete</button>
                    </div>
                `
            }).join(" ")
            display.innerHTML = html;
        } else {
            const html = `<h2>No items added</h2>`
            display.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}

async function deleteProductToCustomer(productId: string) {
    try {
        const response = await fetch("/api/user-product/delete-user-product", {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({productId}),
        });

        const result = await response.json();
        console.log("Success:", result);

        renderWish()
    } catch (error) {
        console.error(error);
    }
}