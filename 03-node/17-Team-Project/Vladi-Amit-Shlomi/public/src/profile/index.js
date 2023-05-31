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
checkIfUserSavedInCookies();
loadUserGames();
savedGamesBtn.addEventListener("click", () => {
    if (savedGamesWindow.style.display === "" ||
        savedGamesWindow.style.display === "none") {
        savedGamesWindow.style.display = "flex";
    }
    else {
        savedGamesWindow.style.display = "none";
    }
    if (createGameWindow.style.display === "flex") {
        createGameWindow.style.display = "none";
    }
});
createGameBtn.addEventListener("click", () => {
    if (createGameWindow.style.display === "" ||
        createGameWindow.style.display === "none") {
        createGameWindow.style.display = "flex";
    }
    else {
        createGameWindow.style.display = "none";
    }
    if (savedGamesWindow.style.display === "flex") {
        savedGamesWindow.style.display = "none";
    }
});
function toggleWindows() { }
function checkIfUserSavedInCookies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield fetch("api/v1/users/getUser")
                .then((res) => res.json())
                .then(({ user }) => user)
                .catch((error) => console.error(error));
            if (!user) {
                location.href = "/";
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
