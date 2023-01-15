// //1) get an image URL from the user, and add the image to the DOM. Do it five times (with a loop)

// https://www.yo-yoo.co.il/coolpics/images/uploads/puppy-1207818_640.jpg

const title: HTMLDivElement | null = document.querySelector("#title");
console.dir(title);

const NameOfPicture: string | null = prompt("what is the name of the picture");
// const NameOfPicture: string | null = "puppy";

const imageUrl: string | null = prompt('Enter image url')
for (let i = 0; i < 5; i++) {
  // יוצר בזכרון אלמנט של img 
  const imge = document.createElement("img")
  imge.src = imageUrl!;
  imge.alt = NameOfPicture!;
  title?.appendChild(imge)   // id מוסיף אלמנט ל
}







// 2) get five image URLs from the user and print five images on the DOM.



for (let i = 0; i < 5; i++) {
  const imageUrl1: string | null = prompt('Enter image url')
  // יוצר בזכרון אלמנט של img 
  const imge = document.createElement("img")
  imge.src = imageUrl1!;
  imge.alt = NameOfPicture!;
  title?.appendChild(imge)   // id מוסיף אלמנט ל
}




// 3) use the previous puzzle on store items, and show them on the items on the DOM





