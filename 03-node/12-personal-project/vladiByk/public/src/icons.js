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
// all windows event listener
window.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const target = e.target;
    if (target.classList.contains("profileIcon")) {
        displayProfile(currentUser);
    }
    if (target.classList.contains("notificationsIcon")) {
        // nothing yet...
    }
    if (target.classList.contains("signOutbtn")) {
        removeCookie(usersAPI);
        removeCookie(boardsAPI);
        window.location.href = "/";
    }
    if (target.classList.contains("exitProfilePage")) {
        profileWindow.style.display = "none";
    }
    if (target.classList.contains("backToMainIcon")) {
        removeCookie(boardsAPI);
        window.location.href = "/main";
    }
    if (target.classList.contains("editBoardIcon")) {
        editBoardWindow.style.display = "flex";
        nameInputEle.value = currentBoard.name;
        imageDisplayedInEdit.src = currentBoard.imageSrc;
    }
}));
