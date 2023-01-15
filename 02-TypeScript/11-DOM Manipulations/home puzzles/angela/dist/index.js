var popUp = document.querySelector("#popup");
function openPopup() {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.add("open-popup");
}
function closePopup() {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.remove("open-popup");
}
openPopup();
closePopup();
