var imgElements = document.querySelectorAll('img');
window.addEventListener("click", function (e) {
    var target = e.target;
    if (target.nodeName == "IMG") {
        imgElements.forEach(function (img) { return img.style.boxShadow = '0 0 0 black'; });
        target.style.boxShadow = '0 0 50px black';
        localStorage.setItem("userChoice", target.id);
    }
    if (target.innerHTML === "START") {
        if (!localStorage.getItem('userChoice'))
            return;
        window.location.href = "index.html";
    }
});
