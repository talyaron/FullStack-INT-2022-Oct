class Article {
  constructor(
    public tital: string,
    public src: string,
    public paregraph: string
  ) {}
}

function renderArticles(articles: Article[]){
    try {
        if(!articles) throw new Error("No articles found")

        const html = articles
        .map((articles) => {
            return `<div class="itam1">
            <h1>${articles.tital}</h1>
            <img src="${articles.src}" alt="article name is ${articles.tital}">
            <p>${articles.paregraph}</p>
            </div>`
        })
        .join(" ");
        const gridContainer = document.querySelector(".gridContainer")
        if(!gridContainer) throw new Error("Grid container not found")
        gridContainer.innerHTML = html;
    } catch (error) {
        console.error(error);

    }
}
 function handelarticles() {
    console.log("test");
try {
    fetch("/api/get-articles")
    .then((res) => res.json())
    .then(({ articles }) => {
        try {
            if (!articles) throw new Error("didnt find article");
            console.log(articles);
            renderArticles(articles);
          } catch (error) {
            console.error(error);
          }
    })
} catch (error) {
    console.error(error);
}
 }
