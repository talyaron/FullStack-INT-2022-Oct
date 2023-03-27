var Article = /** @class */ (function () {
    function Article(name, content, pic) {
        this.name = name;
        this.content = content;
        this.pic = pic;
    }
    return Article;
}());
function handleGetUsers() {
    console.log("test");
    try {
        fetch("/api/get-articles")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                renderUsers(articles);
                if (!articles)
                    throw new Error("didnt find users");
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
function renderUsers(articles) {
    try {
        if (!articles)
            throw new Error("No users");
        var html = articles
            .map(function (articles) {
            return "<div class=\"page__news__box\">\n            <h1>" + articles.name + "</h1>\n              <img src=\"" + articles.pic + "\" alt=\"articles name is " + articles.name + "\">\n              <p>" + articles.content + "</p>\n              </div>";
        })
            .join(" ");
        var usersElement = document.querySelector("#articles");
        if (!usersElement)
            throw new Error("coundnt find users element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
