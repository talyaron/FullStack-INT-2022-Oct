function renderlatestArticle() {
    try {
        var latestArticleRoot = document.querySelector("#latestArticleRoot");
        if (!latestArticleRoot)
            throw new Error("latest article not found");
        var article = articles[articles.length - 1];
        latestArticleRoot.innerHTML = "\n            <div id=\"latestArticleImageRoot\" class=\"main__latestArticle__image\"></div>\n            <h1 contenteditable=\"false\">" + article.title + "</h1>\n            <p contenteditable=\"false\">" + article.paragraph + "</p>\n        ";
        var latestArticleImageRoot = document.querySelector("#latestArticleImageRoot");
        if (!latestArticleImageRoot)
            throw new Error("latest article image not found");
        latestArticleImageRoot.style.backgroundImage = "url(" + article.imageUrl + ")";
    }
    catch (error) {
        console.error(error);
    }
}
function renderSideArticles() {
    try {
        var sideArticlesRoot = document.querySelector("#sideArticlesRoot");
        if (!sideArticlesRoot)
            throw new Error("side articles not found");
        var sideArticles = [articles[articles.length - 2], articles[articles.length - 3], articles[articles.length - 4]];
        var html = sideArticles.map(function (article) {
            return "\n            <div class=\"main__sideArticles__article\">\n                <img class=\"main__sideArticles__article__image\" src=\"" + article.imageUrl + "\">\n                <div class=\"main__sideArticles__article__details\">\n                    <h1 contenteditable=\"false\">" + article.title + "</h1>\n                    <p contenteditable=\"false\">" + article.paragraph + "</p>\n                </div>   \n            </div>     \n            ";
        }).join(" ");
        sideArticlesRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
