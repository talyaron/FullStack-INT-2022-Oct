window.addEventListener('load', () => {
    console.log("Hello");
    
    getArticles();
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
        getArticles();
}

function getArticles() {
    fetch('/all-articles')
        .then((response) => response.json())
        .then((allArticles) => {
            renderArticles(allArticles, "display");
            renderArticlesAdmin(allArticles, "displayAdmin");
        });
}

function renderArticlesAdmin(articles: Article[], displayName: string){
    try {
        
        const display = document.getElementById(displayName);
        if(!display) throw new Error("Display not found");
        if(!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        }  else {
            const html = articles
            .map((article) => {
                return `<div class="article">
                <h1>${article.header}</h1>
                <h4>${article.subject}</h4>
                <p>${article.body}</p>
                <button onclick="remove('${article.id}')">Remove</button>
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
        if(!display) throw new Error("Display not found");
        if(!articles) {
            display.innerHTML = '<h1>No articles at the moment</h1>';
        }  else {
            const html = articles
            .map((article) => {
                return `<div class="article">
                <h1>${article.header}</h1>
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

function remove(id:string) {
    try {
        fetch('/all-articles')
        .then((response) => response.json())
        .then((allArticles) => {
            const index = (allArticles as Article[]).findIndex((x) => x.id === id);
            if(index == -1) throw new Error("Can not find article");
            console.log(index);
            
            fetch('/articles-delete', {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(index),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        });
        getArticles();
    } catch (error) {
        console.error(error);
    }
}