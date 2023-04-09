// VIEW
function renderArticle(articles: Article[]) {
    try {
        const rootContainerNewNews = document.getElementById('rootContainerNewNews')! as HTMLDivElement;
        if (!rootContainerNewNews) throw new Error("no found rootNewNew container Element")
        const html = articles.map(article => {
            return `
        <div title="${article.title.split(' ').splice(1 , 3).join(' ')}" id='${article.uuid}' ondblclick="handleClickArticle('${article.uuid}') " 
        style="background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(${article.src})"  
        class="main-section__main__container-new-news__article active ">
        
        <h1 id='updateTitle-${article.uuid}' class="main-section__main__container-new-news__article__title">
        ${article.title}
        </h1>

        <p id='updateSubtitle-${article.uuid}' class="main-section__main__container-new-news__article__subtitle">
        ${article.des}
        </p>

        ${checkLogin()?renderAdminBtn(article.uuid):''}

        </div>
        `
        }).join('')



        rootContainerNewNews.innerHTML = html
    } catch (error) {
        console.error(error);
    }
}

function renderAdminBtn(uid: string): string {
    try {
        const html = `
        <div class="admin-buttons active">
        <button  class="admin-buttons__updateBTN" onclick="handelEditClick('${uid}')">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="handelTrashClick('${uid}')" class="admin-buttons__removeBTN">
            <i class="fa-solid fa-trash-can" title="exit"></i>
        </button>
      </div>`

        return html
    } catch (error) {
        console.error(error)
        return ''
    }
}

function makeArticleActive(element: HTMLElement) {
    try {
        const rootContainerNewNews = document.querySelectorAll('.main-section__main__container-new-news__article')!
        rootContainerNewNews.forEach(ele => {
            ele.classList.remove("active")
        })

        element.classList.add('active')


    } catch (error) {
        console.error(error);
    }

}

