


function getArticles() {
    console.log("test");
    try {
        fetch("/api/get-articles")
            .then((res) => res.json())
            .then(({ articles }) => {
                try {
                    renderArticles(articles);
                    if (!articles) throw new Error("didnt find article");
                    console.log(articles);
                } catch (error) {
                    console.error(error);
                }
            });
    } catch (error) {
        console.error(error);
    }
}


getArticles()

function renderArticles(articles: Array<Article>) {
    try {
        if (!articles) throw new Error("No article");
        let counter = 0
        const html = articles
            .map((article) => {
                counter++;
                return ` <div class="grid_container__item${counter}">
                <img src="${article.imgSrc}"
                    alt="">
                <div class="grid_container__item${counter}__centered${counter}">
                    <h4>${article.title}</h4>
                    <p>${article.content}
                    </p>
                </div>
            </div>`;
            })
            .join(" ");
        const usersElement = document.querySelector(".grid_container");
        if (!usersElement) throw new Error("coundnt find articles element on DOM");

        usersElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}