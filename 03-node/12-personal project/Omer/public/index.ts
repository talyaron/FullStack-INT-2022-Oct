import { product } from "../API/product/productModel";
import { userFromcookies } from "../API/user/userControls";
import { logIn } from "../API/user/userModel";

function showPassword() {
    const showPass = document.getElementById("checkbox") as HTMLInputElement;
    const inputPassword: any = document.getElementById("passwordForm");

    if ((showPass as HTMLInputElement).checked) {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }


}

async function signUp(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        const response = await fetch("/api/user/add-user", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        });

        const result = await response.json();
        console.log("Success:", result);
        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}

async function logIn(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const password = ev.target.elements.password.value;
        const response = await fetch("/api/user/logIn", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, password }),
        });

        const result = await response.json();
        console.log("Success:", result);
        if (result == true) {
            window.location.href = "./shop.html";
            console.log("Logged in successfully");
        } else {
            console.log("Name or password are incorrect");
            alert("Name or password are incorrect")
        }
        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}

async function loadUserToShop() {
    try {
        const response = await fetch("/api/user/getUser-for-logIn");
        const jsonData = await response.json();
        const user = jsonData as logIn;
        const display = document.getElementById("name")
        if (!display) throw new Error("No div found");
        const html = `
            <h2>Welcome ${user.name}</h2>
        `
        display.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

