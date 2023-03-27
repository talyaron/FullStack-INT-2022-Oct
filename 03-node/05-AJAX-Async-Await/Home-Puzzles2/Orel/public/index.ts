
window.onload = () => {
    try {
        getArticlesFromApi()
       

    } catch (error) {
        console.error(error)
    }
};


function getArticlesFromApi() {
    try {
        fetch("/api/articles")
            .then(response => response.json())
            .then(data => {
                renderArticle(data)
                articles = data
            })
    } catch (error) {
        console.error(error);
    }
}

loginOn()
