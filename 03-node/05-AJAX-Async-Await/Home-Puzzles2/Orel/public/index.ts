

class Article {
    uuid: string
    constructor(
        public title: string,
        public des: string,
        public src: string,
    ) { }
}

let articles: Article[] = []

// MODEL

window.onload = () => {
    try {
        getArticlesFromApi()

        console.log("page is fully loaded");
    } catch (error) {
        console.error(error)
    }
};

function checkLogin():boolean{
    try {
        const data = localStorage.getItem("admin");
        if(!data) throw new Error("no found admin data in local storage")
        if(data == "true") return true
        else return false
    } catch (error) {
       
        console.error(error)
        return false
    }
}
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

// VIEW
function renderArticle(articles: Article[]) {
    try {
        const rootContainerNewNews = document.getElementById('rootContainerNewNews')! as HTMLDivElement;
        if (!rootContainerNewNews) throw new Error("no found rootNewNew container Element")
        const html = articles.map(article => {
            return `
        <div id='${article.uuid}' onclick="handleClickArticle('${article.uuid}') " 
        style="background:linear-gradient(45deg , rgba(0, 0, 0, 1),rgba(0, 0, 0, 0)),url(${article.src})"  
        class="main-section__main__container-new-news__article active">
        
        <h1 class="main-section__main__container-new-news__article__title">
        ${article.title}
        </h1>

        <p class="main-section__main__container-new-news__article__subtitle">
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
        <button  class="admin-buttons__updateBTN">
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

// CONTROLLER Handles

function handleClickOnLogin() {
    try {
        window.open('/register.html')
    } catch (error) {
        console.error(error);
    }
}


function handleClickArticle(uuid: string) {
    try {
        console.log(uuid);

    } catch (error) {

    }
}


function handleClickLogout() {
    try {
        localStorage.setItem('admin', "false")
    } catch (error) {
        console.error(error)
    }
}

function handleClickSearchList() {
    const searchForm = document.getElementById('searchForm')! as HTMLFormElement
    searchForm.classList.toggle('active')
}

function handleChangeSearch(ev: any) {
    try {
        const rootContainerNewNews = document.querySelectorAll('.main-section__main__container-new-news__article h1')!
        ev.preventDefault()

       rootContainerNewNews.forEach(e=>{
       
        const valueInput = ev.target.value.toLowerCase() ;
        const contentValue = e.textContent!.toLocaleLowerCase()
        const parent = e.parentElement!
        if(contentValue.includes(valueInput)){
            makeArticleActive(parent)

        }
         if(ev.target.value.length ===  0){
            const articlesBox = document.querySelectorAll('.main-section__main__container-new-news__article')!
            articlesBox.forEach(ele => {
                ele.classList.add("active")
            })
            
        }

       })

        }

    catch (error) {
        console.log(error);
    }
}

 function handelTrashClick(uuid: string) {
    try {
        try {

            if (!uuid) throw new Error("No UID");

            //send to server:
         fetch("/api/articles", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    name: uuid
                })
            })
                .then((res) => {
                    return res.json()
                })
                .then(data => console.log(data))
                .catch((error) => {
                    console.error(error);
                });
                getArticlesFromApi()
        } catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.error(error)
    }
}

function handleClickAddArticle() {
    try {
        if(checkLogin()){
            const addNewArticle = document.getElementById('addNewArticle')! as HTMLElement
            addNewArticle.classList.toggle('active')
    
        }else{
            alert("you must to be Admin")
        }

    } catch (error) {
        console.error(error)
    }
}

function handleSubmitFormAdd(ev:any){
    try {
        ev.preventDefault()
        const title = ev.target.elements.title.value
        const subtitle = ev.target.elements.subtitle.value
        const src = ev.target.elements.src.value


                 fetch("/api/articles/add", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                        name:title ,
                        des: subtitle , 
                        img: src

                })
            })
                .then((res) => {
                    return res.json()
                })
                .then(data => console.log(data))
                .catch((error) => {
                    console.error(error);
                });
                const addNewArticle = document.getElementById('addNewArticle')! as HTMLElement
                addNewArticle.classList.remove('active')
                getArticlesFromApi()
        ev.target.reset()
    } catch (error) {
        console.error(error)
    }
}
// control 


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


loginOn()

function loginOn(): void {
    try {

        const adminButtons = document.querySelectorAll('.admin-buttons');
        const loginContainer = document.querySelector('.main-section__header__nav-top__login')! as HTMLDivElement

        if (checkLogin()) {

            loginContainer.innerHTML = `
                <img width="50px" src="./images/adminOn.png" >
                <button onclick="handleClickLogout()">
                <i class="fa-solid fa-person-walking-arrow-right"></i>
                </button>
                `


        } else {

            loginContainer.innerHTML = `
            <i class="fa-solid fa-user"></i>
            <span id="navToploginSpan">Admin-login</span>

            `
        }
    } catch (error) {
        console.warn(error);

        const loginContainer = document.querySelector('.main-section__header__nav-top__login')! as HTMLDivElement
        loginContainer.innerHTML =
            `
        <i class="fa-solid fa-user"></i>
        <span id="navToploginSpan">Admin-login</span>

        `
    }
}

