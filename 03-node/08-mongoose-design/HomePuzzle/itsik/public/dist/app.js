function renderNavBar() {
    var html = "<ul class=\"navUl\">\n<li id=\"1\">\u05D4\u05E1\u05D1\u05E8</li>\n<li id=\"2\">\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DC\u05DE\u05D9\u05D3</li>\n<li id=\"3\">\u05D4\u05D5\u05E1\u05E3 \u05DE\u05E7\u05E6\u05D5\u05E2</li>\n<li id=\"4\">\u05D4\u05D5\u05E1\u05E3 \u05E6\u05D9\u05D5\u05DF</li>\n<li id=\"5\">\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05D5\u05E8\u05D4</li>\n</ul>";
    var newdiv = document.createElement("div");
    var navbar = document.querySelector(".navbar");
    newdiv.innerHTML = html;
    navbar.appendChild(newdiv);
    renderListNavBar();
}
function renderListNavBar() {
    try {
        var listed = document.querySelectorAll("li");
        if (!listed)
            throw new Error("cant find navbar lists");
        listed.forEach(function (list) {
            list.addEventListener("click", activeListBar);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function activeListBar() {
    if (this.id == 1) {
        renderToExplain();
    }
    else if (this.id == 2) {
        console.log("id is 2");
    }
    else if (this.id == 3) {
        console.log("id is 2");
    }
    else if (this.id == 4) {
        console.log("id is 2");
    }
    else if (this.id == 5) {
        console.log("id is 2");
    }
}
//  renders
function renderToExplain() {
}
