let counter = 0;
let firstCard = "";
let secondCard = "";
let cards = document.getElementsByClassName('card')!as HTMLCollectionOf<HTMLElement>
let cardsImg   = [
 "./images/bibi.jpeg",
 "./images/bibi.jpeg",
 "./images/ahtibi.jpeg",
 "./images/ahtibi.jpeg",
 "./images/bengvir.jpeg",
 "./images/bengvir.jpeg",
 "./images/deri.jpeg",
 "./images/deri.jpeg",
 "./images/gantz.jpeg",
 "./images/gantz.jpeg",
 "./images/merav.jpeg",
 "./images/merav.jpeg",
 "./images/mirir.jpeg",
 "./images/mirir.jpeg",
 "./images/ylapid.jpeg",
 "./images/ylapid.jpeg",
]
function fixAllCards(){
   let array = shuffle(cardsImg);
   let click:null | HTMLImageElement =null;
  
    for(let i=0; i< cards.length;i++){
      let img = document.createElement("img")as HTMLImageElement;
      img.src= array[i];
      img.style.display = "none";
      cards[i].appendChild(img);
      cards[i].addEventListener("click", ()=>{
        if(img.src == "./images/ylapid.jpeg"){
         var audio = new Audio('./sound/lapid.mpeg');
         audio.play();
         
        }
        if(img.src == "./images/mirir.jpeg"){
         var audio = new Audio('./sound/miri.mpeg');
         audio.play();
        }
        if(img.src == "./images/merav.jpeg"){
         var audio = new Audio('./sound/merav.mpeg');
         audio.play();
        }
        if(img.src == "./images/gantz.jpeg"){
         var audio = new Audio('./sound/gantz.mpeg');
         audio.play();
        }
        if(img.src == "./images/deri.jpeg"){
         var audio = new Audio('./sound/deri.mpeg');
         audio.play();
        }
        if(img.src == "./images/bengvir.jpeg"){
         var audio = new Audio('./sound/bengvir.mpeg');
         audio.play();
        }
        if(img.src == "./images/ahtibi.jpeg"){
         var audio = new Audio('./sound/ahmed.mpeg');
         audio.play();
        }
        if(img.src == "./images/bibi.jpeg"){
         var audio = new Audio('./sound/bibi.mpeg');
         audio.play();
        }


         if(click && img !== click ){
            if(click.src == img.src ){
               // if its success
               var audio = new Audio('./sound/success.mp3');
               audio.play();
               img.style.display = "block";
               click.style.display = "block";
               click.parentElement!.style.background = "red"
               cards[i].style.backgroundColor = "red";
               click = null;             
            }
            // if not success
            else {
               var audio = new Audio('./sound/ohno.mp3');
               audio.play();
               img.style.display = "block";
               setTimeout(()=>{
                  click!.style.display = "none"
                  img.style.display = "none";
                  click = null;
               },500)
            }
         }
         else {
            click = img;
            img.style.display = "block";
         }
         
      })
   }
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

