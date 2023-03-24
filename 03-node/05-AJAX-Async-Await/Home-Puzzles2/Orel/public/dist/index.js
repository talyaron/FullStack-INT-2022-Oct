var Article = /** @class */ (function () {
    function Article(title, des, src) {
        this.title = title;
        this.des = des;
        this.src = src;
    }
    return Article;
}());
var articles = [];
// MODEL
window.onload = function () {
    try {
        getArticlesFromApi();
        console.log("page is fully loaded");
    }
    catch (error) {
        console.error(error);
    }
};
function getArticlesFromApi() {
    try {
        fetch("/api/articles")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            renderArticle(data);
            articles = data;
        });
    }
    catch (error) {
        console.error(error);
    }
}
// VIEW
function renderArticle(articles) {
    console.log(articles);
    try {
        var rootContainerNewNews = document.getElementById('rootContainerNewNews');
        if (!rootContainerNewNews)
            throw new Error("no found rootNewNew container Element");
        var html = articles.map(function (article) {
            return "\n        <div onclick=\"handleClickArticle('" + article.uuid + "') \" \n        style=\"background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(" + article.src + ")\"  \n        class=\"main-section__main__container-new-news__article\">\n        \n        <h1 class=\"main-section__main__container-new-news__article__title\">\n        " + article.title + "\n        </h1>\n\n        <p class=\"main-section__main__container-new-news__article__subtitle\">\n        " + article.des + "\n        </p>\n\n        " + renderAdminBtn() + "\n       \n        </div>\n        ";
        }).join('');
        rootContainerNewNews.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAdminBtn() {
    try {
        var html = "\n        <div class=\"admin \">\n        <button class=\"admin__updateBTN\">\n            <i class=\"fa-solid fa-pen-to-square\"></i>\n        </button>\n        <button class=\"admin__removeBTN\">\n            <i class=\"fa-solid fa-trash-can\"></i>\n        </button>\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// CONTROLLER Handles
function handleClickOnLogin() {
    try {
        window.open('/register.html');
    }
    catch (error) {
        console.error(error);
    }
}
function getArticle() {
    try {
        fetch();
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickArticle(uuid) {
    try {
        console.log(uuid);
        console.log(articles);
        fetch('/api/articles')
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var articles = _a.articles;
            try {
                if (!articles)
                    throw new Error("did`nt find articles");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
    }
}
