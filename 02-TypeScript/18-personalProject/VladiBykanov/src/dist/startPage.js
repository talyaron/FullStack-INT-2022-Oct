var userChoice;
window.addEventListener("click", function (e) {
    var target = e.target;
    if (target.nodeName == "IMG") {
        userChoice = target.className;
        localStorage.setItem("userChoice", userChoice);
    }
    if (target.innerHTML === "START") {
        window.location.href = "index.html";
    }
});
