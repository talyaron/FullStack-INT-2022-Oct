// function renderMain() {
//     try {
//       fetch("/")
//         .then((res) => res.json())
//         .then(({ main }) => {
//           try {
//             if (!main) throw new Error("didnt find main");
//           } catch (error) {
//             console.error(error);
//           }
//         });
//     } catch (error) {
//       console.error(error);
//     }
// }

function renderLatestArticle(){
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

function renderAdminLogin(){
    try {
        const adminLoginRoot = document.querySelector("#adminLoginRoot");
        if (!adminLoginRoot) throw new Error ("admin login root not found");

        adminLoginRoot.innerHTML = `
        <form class="navBar__sales__topic__login" onsubmit="handleAdminLogin(event)">
            <input type="text" name="name" placeholder="User name" required>
            <input type="text" name="password" placeholder="password" required>
            <button type="submit">login</button>
        </form>
        `
    } catch (error) {
        console.error(error)  
    }
}


  

  
//   function handleAddUser(ev: any) {
//     try {
//       ev.preventDefault();
//       const name = ev.target.elements.name.value;
//       const src = ev.target.elements.src.value;
//       if (!name) throw new Error("No name");
//       if (!src) throw new Error("No src");
//       const newUser: any = { name, src };
  
//       //send to server:
//       fetch("/api/users'", {
//         method: "POST",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newUser),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   }
