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
                if (!articles)
                    throw new Error("didnt find users");
                console.log(articles);
                renderUsers(articles);
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
            return "<div class=\"userCard\">\n              <img src=\"" + articles.pic + "\" alt=\"user name is " + articles.name + "\">\n              <p>" + articles.content + "</p>\n              </div>";
        })
            .join(" ");
        var usersElement = document.querySelector("#users");
        if (!usersElement)
            throw new Error("coundnt find users element on DOM");
        usersElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
