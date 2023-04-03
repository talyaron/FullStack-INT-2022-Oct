window.addEventListener('load', () => {
    console.log("Hello");
    try {
        getArticlesMain();
        getArticlesAdmin();
    } catch (error) {
        console.error(error);
    }

})
function handleForm(ev: any) {
    ev.preventDefault();

    const header = ev.target.elements.header.value;
    const subject = ev.target.elements.subject.value;
    const body = ev.target.elements.body.value;
    ev.target.reset();
    const article: Article = new Article(header, subject, body);
    fetch('/articles-data', {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    getArticlesAdmin();
}

function getArticlesAdmin() {
    fetch('/all-articles')
        .then((response) => response.json())
        .then((allArticles) => {
            renderArticlesAdmin(allArticles, "displayAdmin");
        });
}

function getArticlesMain() {
    fetch('/all-articles')
        .then((response) => response.json())
        .then((allArticles) => {
            renderArticles(allArticles, "display");
        });
}

function renderArticlesAdmin(articles: Article[], displayName: string) {
    try {

        const display = document.getElementById(displayName);
        if (!display) throw new Error("Display not found");
        if (!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        } else {
            const html = articles
                .map((article) => {
                    return `<div class="article">
                <h2>${article.header}</h2>
                <h4>${article.subject}</h4>
                <p>${article.body}</p>
                <a href="#updateForm"><button onclick="update('${article.id}')">Update</button></a>
                </div>`;
                })
                .join(" ");
            display.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}

function renderArticles(articles: Article[], displayName: string) {
    try {

        const display = document.getElementById(displayName);
        if (!display) throw new Error("Display not found");
        if (!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        } else {
            const html = articles
                .map((article) => {
                    return `<div class="article">
                <h2>${article.header}</h2>
                <h4>${article.subject}</h4>
                <p>${article.body}</p>
                </div>`;
                })
                .join(" ");
            display.innerHTML = html;
        }
    } catch (error) {
        console.error(error);
    }
}

function update(id: string) {
    try {
        fetch('/all-articles')
            .then((response) => response.json())
            .then((allArticles) => {
                const index = (allArticles as Article[]).findIndex((x) => x.id === id);
                const article: Article = allArticles[index];
                if (!updateFormm) throw new Error("Could not find form");
                const html = `
                <form onsubmit="updateForm(event, '${id}')" id="updateForm">
                    <input type="text" placeholder="${article.header}" name="header">
                    <input type="text" placeholder="${article.subject}" name="subject">
                    <textarea name="body" cols="30" rows="5" placeholder="${article.body}"></textarea>
                    <input type="submit" value="Send">
                </form>
                `;
                updateFormm.innerHTML = html;
            });
        getArticlesAdmin();
    } catch (error) {
        console.error(error);
    }
}

function updateForm(ev, id:string) {
    try {
        ev.preventDefault();
        console.log(ev);
        let header = ev.target.elements.header.value;
        if(!header) header = ev.target.elements.header.placeholder;
        let subject = ev.target.elements.subject.value;
        if(!subject) subject = ev.target.elements.subject.placeholder;
        let body = ev.target.elements.body.value;
        if(!body) body = ev.target.elements.body.placeholder; 

        const article = new Article("","","");
        article.copyconstructor(header,subject,body,id);

        if (!updateFormm) throw new Error("Could not find form");
        fetch('/articles-update', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        updateFormm.innerHTML = "";
        getArticlesAdmin();
    } catch (error) {
        console.error(error);
    }
}
