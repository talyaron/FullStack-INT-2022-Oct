// level 2
let imageUrlList: string[] = [];

for (let i = 0; i < 5; i++) {
  let getImage = prompt("Enter an image URL:");
  imageUrlList.push(`${getImage}`);
}

let wrapper  = document.getElementById("wrapper") as HTMLDivElement;

for (let i = 0; i < imageUrlList.length; i++) {
  let img = document.createElement("img");
  img.src = imageUrlList[i];
  wrapper.appendChild(img);
}
