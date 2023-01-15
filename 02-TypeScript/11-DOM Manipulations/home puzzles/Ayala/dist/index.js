// //1) get an image URL from the user, and add the image to the DOM. Do it five times (with a loop)
// https://www.yo-yoo.co.il/coolpics/images/uploads/puppy-1207818_640.jpg
var title = document.querySelector("#title");
console.dir(title);
var NameOfPicture = prompt("what is the name of the picture");
console.dir("name of the picture", name);
// const NameOfPicture: string | null = "puppy";
var imageUrl = prompt('Enter image url');
for (var i = 0; i < 5; i++) {
    // יוצר בזכרון אלמנט של img 
    var imge = document.createElement("img");
    imge.src = imageUrl;
    imge.alt = NameOfPicture;
    title === null || title === void 0 ? void 0 : title.appendChild(imge); // id מוסיף אלמנט ל
}
// 2) get five image URLs from the user and print five images on the DOM.
for (var i = 0; i < 5; i++) {
    var imageUrl1 = prompt('Enter image url');
    // יוצר בזכרון אלמנט של img 
    var imge = document.createElement("img");
    imge.src = imageUrl1;
    imge.alt = NameOfPicture;
    title === null || title === void 0 ? void 0 : title.appendChild(imge); // id מוסיף אלמנט ל
}
// 3) use the previous puzzle on store items, and show them on the items on the DOM
