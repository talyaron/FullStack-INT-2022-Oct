"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
checkIfUserSignedIn();
const showOrHidePassword = document.querySelector("#showOrHidePassword");
if (!showOrHidePassword)
    throw new Error("showOrHidePassword not found on DOM");
const password = document.querySelector("#checkPassword");
if (!password)
    throw new Error("password not found on DOM");
showOrHidePassword.addEventListener("click", (e) => {
    try {
        if (password.type === "password") {
            password.type = "text";
            showOrHidePassword.classList.remove("fa-eye");
            showOrHidePassword.classList.add("fa-eye-slash");
        }
        else if (password.type === "text") {
            password.type = "password";
            showOrHidePassword.classList.remove("fa-eye-slash");
            showOrHidePassword.classList.add("fa-eye");
        }
    }
    catch (error) {
        console.error(error);
    }
});
function checkIfUserSignedIn() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchUser = yield fetch("api/v1/users/getUser")
                .then((res) => res.json())
                .then(({ user }) => user ? true : false)
                .catch((error) => console.error(error));
            if (fetchUser) {
                location.href = "/profile";
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
