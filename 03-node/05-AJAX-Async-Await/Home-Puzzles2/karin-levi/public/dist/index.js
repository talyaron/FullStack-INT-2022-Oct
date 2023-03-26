function getArticles() {
    console.log("test");
    try {
        fetch("/api/get-articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                renderArticles(articles);
                if (!articles)
                    throw new Error("didnt find article");
                console.log(articles);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
getArticles();
function renderArticles(articles) {
    try {
        if (!articles)
            throw new Error("No article");
        var counter_1 = 0;
        var html = articles
            .map(function (article) {
            counter_1++;
            return " <div class=\"grid_container__item" + counter_1 + "\">\n                <img src=\"" + article.imgSrc + "\"\n                    alt=\"\">\n                <div class=\"grid_container__item" + counter_1 + "__centered" + counter_1 + "\">\n                    <h4>" + article.title + "</h4>\n                    <p>" + article.content + "\n                    </p>\n                </div>\n            </div>";
        })
            .join(" ");
        var usersElement = document.querySelector(".grid_container");
        if (!usersElement)
            throw new Error("coundnt find articles element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
