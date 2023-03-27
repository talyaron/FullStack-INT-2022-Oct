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
            console.log(articles);
            renderArticles(articles, index);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderArticles(articles, index) {
    var html = "<h1 class=\"pNewName\">" + articles[index].article + "</h1>";
    //    <p id="newNews">${news.article[1]}</p>`
    var usersElement = document.getElementById("'" + index + "'");
    if (usersElement) {
        usersElement.innerHTML = html;
    }
}
