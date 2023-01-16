
let imageUrls: string[] = [];

for (let i = 0; i < 5; i++) {
  let imageUrl = prompt("Enter an image URL:");
  imageUrls.push(`${imageUrl}`);
}

let container = document.getElementById("container") as HTMLDivElement;

for (let i = 0; i < imageUrls.length; i++) {
  let img = document.createElement("img");
  img.src = imageUrls[i];
  container.appendChild(img);
}