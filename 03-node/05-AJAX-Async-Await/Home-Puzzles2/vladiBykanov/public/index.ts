interface Article {
  title: string;
  body: string;
  imgURL: string;
}
const newsContainer = document.querySelector(
  ".newsContainer"
) as HTMLDivElement;

const start = async () => {
  const articleList: Article[] = await fetch("/api/v1/articles", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const { articles } = data;
      return articles;
    })
    .catch((err) => console.error(err));
  console.log(articleList);

  articleList.forEach((article) => {
    const articleDiv: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    articleDiv.classList.add("article");
    articleDiv.style.background = `url(${article.imgURL}) no-repeat center / cover`;
    articleDiv.innerHTML = `<h3>${article.title}</h3>
    <p>${article.body}</p>`;
    newsContainer.append(articleDiv);
  });
};

start();
