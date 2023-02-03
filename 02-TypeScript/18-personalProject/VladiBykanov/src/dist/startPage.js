var userChoice;
var imgElements = document.querySelectorAll('img');
console.log(imgElements);
window.addEventListener("click", function (e) {
    var target = e.target;
    imgElements.forEach(function (img) {
        img.style.boxShadow = '0 0 0 black';
    });
    console.log(target.className);
    if (target.nodeName == "IMG") {
        target.style.boxShadow = '0 0 50px black';
        userChoice = target.className;
        localStorage.setItem("userChoice", userChoice);
    }
    if (target.innerHTML === "START") {
        window.location.href = "index.html";
    }
});
