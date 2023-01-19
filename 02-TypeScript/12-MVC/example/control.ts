//Controler
function getUrlFromUser() {
  try {
    const url = prompt("add picture url");
    if (!url || typeof url !== "string") throw new Error("no url found");
    pictures.push(new Picture(url));
  } catch (error) {
    console.error(error);
  }
}

function renderPictures(pictures: Picture[]) {
  try {
    let html = "";

    pictures.forEach((picture) => {
      html += `<img src="${picture.imgUrl}">`;
    });
    console.log(html);

    const rootPictures = document.querySelector("#rootPictures");
    if (!rootPictures) throw new Error("couldnt find root element of pictures");
    rootPictures.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
