var imageClick = document.querySelectorAll(".main__container");
if (imageClick) {
    imageClick.forEach(function (img, index) {
        img.addEventListener("click", function () {
            getArticels(index);
        });
    });
}
function getArticels(index) {
    try {
        fetch("/articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            renderArticles(articles, index);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderArticles(articles, index) {
    if (index <= 0) {
        console.log("00000000");
        var fImag = document.querySelector("#img0");
        var fPar = document.querySelector("#petrusev");
        //  fImag.style.display = "none";
        //  fPar.style.display = "none";
        var html = articles.map(function (news) {
            return "<h1 class=\"pNewName\">" + news.name[0] + "</h1>\n                <p id=\"newNews\">" + news.article[0] + "</p>";
        }).join(" ");
        var usersElement = document.querySelector(".main__container__down");
        if (usersElement) {
            usersElement.innerHTML = html;
        }
    }
    else if (index <= 1) {
        console.log("11111111");
    }
    else if (index <= 2) {
        console.log("222222");
    }
}
