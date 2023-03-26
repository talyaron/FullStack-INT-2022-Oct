function renderLatestArticle(){
    try {
        const latestArticleRoot:HTMLDivElement | null = document.querySelector("#latestArticleRoot");
        if(!latestArticleRoot) throw new Error ("latest article not found");

        const article = articles[articles.length-1];
        
        latestArticleRoot.innerHTML=`
            <div id="latestArticleImageRoot" class="main__latestArticle__image">
                <button id="editBtn" class="main__latestArticle__edit" onclick="handleEditArticle('${article.uid}')">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button id="saveBtn" class="main__latestArticle__save" id="save-${article.uid}" onclick="handleSaveArticle('${article.uid}')">
                    <i class="fa-solid fa-circle-check"></i>
                </button>
            </div>
            <h1 id="editTitle-${article.uid}" contenteditable="false">${article.title}</h1>
            <p id="editParagraph-${article.uid}" contenteditable="false">${article.paragraph}</p>
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
            <div id="article-${article.uid}" class="main__sideArticles__article">
                <button id="editBtn" class="main__sideArticles__article__edit" onclick="handleEditArticle('${article.uid}')">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button id="saveBtn" class="main__sideArticles__article__save" id="save-${article.uid}" onclick="handleSaveArticle('${article.uid}')">
                    <i class="fa-solid fa-circle-check"></i>
                </button>
                <img class="main__sideArticles__article__image" src="${article.imageUrl}">
                <div class="main__sideArticles__article__details">
                    <h1 id="editTitle-${article.uid}" contenteditable="false">${article.title}</h1>
                    <p id="editParagraph-${article.uid}" contenteditable="false">${article.paragraph}</p>
                </div>   
            </div>     
            `
        }).join(" ");

        sideArticlesRoot.innerHTML = html;

    } catch (error) {
        console.error(error)
    }
}

function toggleAdminLogin(){
    try {
        const adminLoginForm: HTMLDivElement | null = document.querySelector(".navBar__sales__topic__login");
        if (!adminLoginForm) throw new Error ("admin login root not found");

        adminLoginForm.classList.toggle('active');
        
    } catch (error) {
        console.error(error)  
    }
}

function renderAdminTools(){
    try {
        const addArticleForm: HTMLDivElement | null = document.querySelector(".addArticleForm");
        if (!addArticleForm) throw new Error ("add Article Form not found");
        addArticleForm.classList.toggle('active');

        const _editBtns = document.querySelectorAll("#editBtn");
        if (!_editBtns) throw new Error ("edit Btns were not found");
        const editBtns: any[] = Array.from(_editBtns);
        editBtns.forEach(button => button.classList.toggle('active'));

        const _saveBtns = document.querySelectorAll("#saveBtn");
        if (!_saveBtns) throw new Error ("save Btns were not found");
        const saveBtns: any[] = Array.from(_saveBtns);
        saveBtns.forEach(button => button.classList.toggle('active'));
        
        
        
    } catch (error) {
        console.error(error)  
    }
}






  
