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
    console.log(articles[index].article);
    var html = "<a href=\"" + articles[index].article + "\"></a>";
    var usersElement = document.getElementById("\"" + index + "\"");
    if (usersElement) {
        usersElement.innerHTML = html;
    }
}
