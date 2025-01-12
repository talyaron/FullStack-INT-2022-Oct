window.onload = function () {
    try {
        getArticlesFromApi();
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
loginOn();
