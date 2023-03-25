function renderlatestArticle(){
    try {
        const latestArticleRoot:HTMLDivElement | null = document.querySelector("#latestArticleRoot");
        if(!latestArticleRoot) throw new Error ("latest article not found");

        const article = articles[articles.length-1]
        
        latestArticleRoot.innerHTML=`
            <div id="latestArticleImageRoot" class="main__latestArticle__image"></div>
            <h1 contenteditable="false">${article.title}</h1>
            <p contenteditable="false">${article.paragraph}</p>
        `
        const latestArticleImageRoot:HTMLDivElement | null = document.querySelector("#latestArticleImageRoot");
        if(!latestArticleImageRoot) throw new Error ("latest article image not found");
        latestArticleImageRoot.style.backgroundImage = `url(${article.imageUrl})`;

    } catch (error) {
        console.error(error)
    }
}

function renderSideArticles(){
    try {
        const sideArticlesRoot: HTMLDivElement | null = document.querySelector("#sideArticlesRoot");
        if(!sideArticlesRoot) throw new Error ("side articles not found");

        const sideArticles: Article[] = [articles[articles.length-2], articles[articles.length-3], articles[articles.length-4]];

        const html = sideArticles.map((article)=>{
            return `
            <div class="main__sideArticles__article">
                <img class="main__sideArticles__article__image" src="${article.imageUrl}">
                <div class="main__sideArticles__article__details">
                    <h1 contenteditable="false">${article.title}</h1>
                    <p contenteditable="false">${article.paragraph}</p>
                </div>   
            </div>     
            `
        }).join(" ");

        sideArticlesRoot.innerHTML = html;

    } catch (error) {
        console.error(error)
    }
}

  
