// import { error } from "console";


const form = document.querySelector("#addNewForm") as HTMLFormElement;
form.addEventListener("submit", (event: any) => {
  event.preventDefault();
  console.dir(event.target)
  const title = event.target.elements.title.value
  const src = event.target.elements.src.value
  const paragraph = event.target.elements.paragraph.value
if(!title || !src || !paragraph) throw new Error("error");
  const newArticle = {
    title,
     src,
    paragraph,
  };
  
  console.log(newArticle);
  fetch("/api/add-article", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    body: JSON.stringify(newArticle),
  })
    .then((res) => res.json())
    .then(() => {
        event.target.reset();
    })
    .catch((error) => {
      console.error(error);
    });
});
