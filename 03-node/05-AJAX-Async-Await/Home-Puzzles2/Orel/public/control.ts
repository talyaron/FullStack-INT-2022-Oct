

// if The admin login function
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

// show Article display
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

        rootContainerNewNews.forEach(e => {

            const valueInput = ev.target.value.toLowerCase();
            const contentValue = e.textContent!.toLocaleLowerCase()
            const parent = e.parentElement!
            if (contentValue.includes(valueInput)) {
                makeArticleActive(parent)

            }
            if (ev.target.value.length === 0) {
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
        if (checkLogin()) {
            const addNewArticle = document.getElementById('addNewArticle')! as HTMLElement
            addNewArticle.classList.toggle('active')

        } else {
            alert("you must to be Admin")
        }

    } catch (error) {
        console.error(error)
    }
}

function handleSubmitFormAdd(ev: any) {
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
                name: title,
                des: subtitle,
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

function handelEditClick(uid: string) {
    try {
        const DataTitle: HTMLElement | null = document.querySelector(`#updateTitle-${uid}`);
        const DataSubtitle: HTMLElement | null = document.querySelector(`#updateSubtitle-${uid}`);

        const adminEditBtn = document.querySelector('.admin-buttons__updateBTN')! as HTMLElement;
        if (adminEditBtn.innerHTML === ` <i class="fa-regular fa-floppy-disk"></i>`) {
            if (!DataTitle) throw new Error("course Data Name not found");
            if (!DataSubtitle) throw new Error("course Data Price not found");
            adminEditBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
            DataTitle.contentEditable = "false";
            DataSubtitle.contentEditable = "false";
            DataTitle.style.color = "white";
            DataSubtitle.style.color = "white";

            const newDataTitle = DataTitle.innerText;
            const newDataSubtitle = DataSubtitle.innerText;
            updateDataEditToServer(newDataTitle, newDataSubtitle, uid);
            getArticlesFromApi()
        } else {
            adminEditBtn.innerHTML = ` <i class="fa-regular fa-floppy-disk"></i>`
            if (!DataTitle) throw new Error("course Data Name not found");
            if (!DataSubtitle) throw new Error("course Data Price not found");

            DataTitle.contentEditable = "true";
            DataSubtitle.contentEditable = "true";
            DataTitle.style.color = "gray";
            DataSubtitle.style.color = "gray";
        }





    } catch (error) {
        console.error(error);
    }
}

function updateDataEditToServer(title: string, subtitle: string, uid: string): void {
try {
    fetch("/api/articles/edit", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: title,
            des: subtitle,
            uuid: uid

        })
    })
        .then((res) => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch((error) => {
            console.error(error);
        });
} catch (error) {
    console.error(error)
}
}



function checkLogin(): boolean {
    try {
        const data = localStorage.getItem("admin");
        if (!data) throw new Error("no found admin data in local storage")
        if (data == "true") return true
        else return false
    } catch (error) {

        console.error(error)
        return false
    }
}
