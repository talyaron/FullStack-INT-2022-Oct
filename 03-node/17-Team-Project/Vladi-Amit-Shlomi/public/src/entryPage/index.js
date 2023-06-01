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
clearGameCookie();
const playNowBtn = document.querySelector("#playNowBtn");
const gameTypeWindow = document.querySelector(".gameTypeWindow");
if (playNowBtn) {
    playNowBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const fetchUser = yield fetch("api/v1/users/getUser")
            .then((res) => res.json())
            .then(({ user }) => user)
            .catch((error) => console.error(error));
        if (!fetchUser) {
            location.href = "/signIn";
        }
        else {
            if (gameTypeWindow) {
                gameTypeWindow.style.display = "flex";
            }
        }
    }));
}
function clearGameCookie() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("api/v1/games/removeGameCookie", { method: "DELETE" });
    });
}
