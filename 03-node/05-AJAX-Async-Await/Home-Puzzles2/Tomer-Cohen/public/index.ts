class Article{
    constructor(
        public name: string,
        public content: string,
        public pic: string
        ){}
}
  
  function handleGetUsers() {
    console.log("test");
    try {
      fetch("/api/get-articles")
        .then((res) => res.json())
        .then(({ articles }) => {
          try {
            renderUsers(articles);
            if (!articles) throw new Error("didnt find users");
            console.log(articles);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderUsers(articles: Array<Article>) {
    try {
      if (!articles) throw new Error("No users");
  
      const html = articles
        .map((articles) => {
          return `<div class="page__news__box">
            <h1>${articles.name}</h1>
              <img src="${articles.pic}" alt="articles name is ${articles.name}">
              <p>${articles.content}</p>
              </div>`;
        })
        .join(" ");
      const usersElement = document.querySelector("#articles");
      if (!usersElement) throw new Error("coundnt find users element on DOM");
  
      usersElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }