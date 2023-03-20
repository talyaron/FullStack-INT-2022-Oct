var toSecond = document.getElementById("toSecond");
if (toSecond) {
    console.log("hi");
    toSecond.addEventListener('click', function () {
        console.log("hi");
        window.location.href = '/second';
    });
}
