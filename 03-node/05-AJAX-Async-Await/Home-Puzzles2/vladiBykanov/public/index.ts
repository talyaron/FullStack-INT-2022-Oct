

async function start() {
  const articleList: string[] = await fetch("/api/v1/articles", {
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
}

start();
