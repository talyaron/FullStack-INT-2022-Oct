import { product } from "../API/product/productModel";
import { logIn } from "../API/user/userModel";

async function addProducts(ev: any) {
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
        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}

async function showProducts() {
    try {
        const respons = await fetch("/api/product/get-products");
        const jsonDat = await respons.json();
        const products = jsonDat as product[];
        console.log(products);

        const main = document.getElementById("main");
        if (!main) throw new Error("No div found");
        if (!products) {
            const html = `
                <h2>No items in shop</h2>
            `
            main.innerHTML = html;
        } else {
            const html = products.map((product) => {
                return `
                    <img src="${product.img}" alt="">
                    <h3>${product.name}</h3>
                    <h4>${product.price}$</h4>
                    <button onclick="addToWish('${product._id}')">Add to cart</button>
                `
            }).join(" ")
            main.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}

async function addToWish(productId: string) {
    try {
        const response = await fetch("/api/user/getUser-for-logIn");
        const jsonData = await response.json();
        const user = jsonData as logIn;
        const userId = user._id


        const respons = await fetch("/api/product/add-to-wish", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId, userId }),
        });

        const result = await respons.json();
        console.log("Success:", result);
    } catch (error) {
        console.error(error);
    }
}

async function showWish() {
    try {
        // const response = await fetch("/api/user/getUser-for-logIn");
        // const jsonData = await response.json();
        // const user = jsonData as logIn;
        // const userId = user._id;
        const display = document.getElementById("wishMain")
        if (!display) throw new Error("No div found");
        const respons = await fetch("api/product/get-user-wish");
        const jsonDat = await respons.json();
        console.log(jsonDat);
        if (jsonDat) {
            const html = (jsonDat as product[]).map((product) => {
                return `
                    <img src="${product.img}" alt="">
                    <h3>${product.name}</h3>
                    <h4>${product.price}$</h4>
                `
            }).join(" ")
            display.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}