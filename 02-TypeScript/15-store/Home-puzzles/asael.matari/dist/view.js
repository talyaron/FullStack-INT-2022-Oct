var img = document.getElementById("img");
var input = document.getElementById("input");
img === null || img === void 0 ? void 0 : img.addEventListener("click", function () {
    if (input)
        input.type = input.type === "password" ? "text" : "password";
});
