var boxes = document.querySelectorAll('.box');
boxes === null || boxes === void 0 ? void 0 : boxes.forEach(function (box) {
    console.log("box");
    box === null || box === void 0 ? void 0 : box.addEventListener('click', function (e) {
        box.style.backgroundColor = 'black';
    });
});
