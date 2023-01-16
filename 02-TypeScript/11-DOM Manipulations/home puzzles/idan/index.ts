//i did not do the thing with the sorting algorithm so i guess ill settle with 2
const images:HTMLHeadingElement|null = document.querySelector(`#imgs`)
const numberOfProducts = 5;
const imgURL:string[] = [];




while(imgURL.length < numberOfProducts) {
    const userInput = prompt (`please paste the url of an image that describes`);
    if(isValidUrl(userInput) && userInput){
        //i added "&& userInput" because i dont like the red line there but i am fine with the other red line on the other place because of the try catch
        imgURL.push(userInput)
    }
    else{
        alert(`not a url`)
    }
} 

if(images){
    for (let index = 0; index < numberOfProducts; index++) {
        images.innerHTML  += `<div class="container"><img src = "${imgURL[index]}"></div>`
    }
}
//amazed this worked^




//i like copying from the internet also good enough for me
function isValidUrl(string:string|null):boolean {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
      return false;
    }
    return true;
}
































//was the alt way i wanted to do it keeping to myself

//// i do not know why i decided to save the images in an array and not just placed them on screen however i am now commited and i will keep working with what i did even though i dont like it
////i.e for length is the numberOfImgs and each time check if its a url and then attempt to paste it on screen ill just do it
