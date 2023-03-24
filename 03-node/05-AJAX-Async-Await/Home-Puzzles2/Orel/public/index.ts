

class Article {
    uuid:string
    constructor(
        public title: string,
        public des: string,
        public src: string,
    ){}
}

// MODEL

window.onload = () => {
try {
    getArticlesFromApi()
    console.log("page is fully loaded");
} catch (error) {
    console.error(error)
}
  };

function getArticlesFromApi(){
    try {
        fetch("/api/articles")
        .then(response=>response.json())
        .then(articles=>{
            renderArticle(articles)
        })
    } catch (error) {
        console.error(error);
    }
}

// VIEW
function renderArticle(articles: Article[]) {
    console.log(articles);
    try {
        const rootContainerNewNews = document.getElementById('rootContainerNewNews')! as HTMLDivElement;
        if (!rootContainerNewNews) throw new Error("no found rootNewNew container Element")
        const html = articles.map(article=>{
        return `
        <div onclick="handleClickArticle('${article.uuid}') " 
        style="background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(${article.src})"  
        class="main-section__main__container-new-news__article">
        
        <h1 class="main-section__main__container-new-news__article__title">
        ${article.title}
        </h1>

        <p class="main-section__main__container-new-news__article__subtitle">
        ${article.des}
        </p>

        ${renderAdminBtn()}
       
        </div>
        `
    }).join('')

    
    
    rootContainerNewNews.innerHTML = html
} catch (error) {
    console.error(error);
}
}

function renderAdminBtn(): string {
    try {
        const html = `
        <div class="admin ">
        <button class="admin__updateBTN">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="admin__removeBTN">
            <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>`

        return html
    } catch (error) {
        console.error(error)
        return ''
    }
}

// CONTROLLER Handles

function handleClickOnLogin(){
try {
    window.open('/register.html')
} catch (error) {
    console.error(error);
}
}

function handleClickArticle(uuid:string){
    try {
        console.log(uuid);
        fetch("/api/articles" , ({
            method:"POST",
            body: uuid
        }))
        
    } catch (error) {
        
    }
}

