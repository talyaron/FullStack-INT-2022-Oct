var Article = /** @class */ (function () {
    function Article(tital, src, paregraph) {
        this.tital = tital;
        this.src = src;
        this.paregraph = paregraph;
    }
    return Article;
}());
function renderArticles(articles) {
    try {
        if (!articles)
            throw new Error("No articles found");
        var html = articles
            .map(function (articles) {
            return "<div class=\"itam1\">\n            <h1>" + articles.tital + "</h1>\n            <img src=\"" + articles.src + "\" alt=\"article name is " + articles.tital + "\">\n            <p>" + articles.paregraph + "</p>\n            </div>";
        })
            .join(" ");
        var gridContainer = document.querySelector(".gridContainer");
        if (!gridContainer)
            throw new Error("Grid container not found");
        gridContainer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handelarticles() {
    console.log("test");
    try {
        fetch("/api/get-articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                if (!articles)
                    throw new Error("didnt find article");
                console.log(articles);
                renderArticles(articles);
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
