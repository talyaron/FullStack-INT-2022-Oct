fetchRadomUser();
setTimeout(function () {
    renderUsers(userList);
}, 300);
setImgClick();
form.addEventListener("submit", handleSubmit);
inputs.forEach(function (input) {
    return input.addEventListener("keydown", function () { return (errMsg.style.display = "none"); });
});
