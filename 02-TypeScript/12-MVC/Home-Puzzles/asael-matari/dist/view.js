var array = document.querySelectorAll(".container");
array.forEach(function (container) {
    var btn = container.querySelector(".slide");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
        container.scrollLeft += 40;
    });
});
var input = document.querySelector("#id_input");
var searchBtn = document.querySelector(".search_icon");
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener("click", function () {
    if (input) {
        input.style.display = input.style.display === "block" ? "none" : "block";
    }
});
