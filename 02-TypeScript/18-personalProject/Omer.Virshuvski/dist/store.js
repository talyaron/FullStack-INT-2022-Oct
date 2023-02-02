document.body.addEventListener('change', function () {
    render(".main");
});
document.body.addEventListener('load', function () {
    render(".main");
});
renderStore(".main");
