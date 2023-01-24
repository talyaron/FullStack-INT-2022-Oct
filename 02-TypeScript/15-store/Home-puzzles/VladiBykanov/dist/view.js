var wrapper = document.querySelector(".cardsWrapper");
var form = document.querySelector(".addUserForm");
var file = document.querySelector("input[type=file]");
var imgSrc = "";
var preview = document.querySelector(".preview");
var errMsg = document.querySelector(".addUserForm__errorMessage");
var inputs = document.querySelectorAll("input");
setTimeout(function () {
    var imgElements = wrapper.querySelectorAll("img");
    imgElements.forEach(function (ele) {
        return ele.addEventListener("click", function () {
            var target = ele.parentElement;
            var ulEl = target === null || target === void 0 ? void 0 : target.querySelector("ul");
            var img = target === null || target === void 0 ? void 0 : target.querySelector('img');
            toggleDisplay(ulEl, img);
        });
    });
}, 400);
