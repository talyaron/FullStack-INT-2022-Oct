let popUp:HTMLDivElement | null = document.querySelector("#popup");

function openPopup(){
    popUp?.classList.add("open-popup");

}
function closePopup(){
    popUp?.classList.remove("open-popup");
    
}
openPopup();
closePopup();

class books{
    public constructor(
        public bookTitle:string,
        public price:number,
        public category:string,
        public auther:string,
        public iamge:string
        ){}
 }

 let items:books[]=[];

 const theBlackDahlia = new items(
    "The Black Dahlia",
    50.78,
    "crime",
    "James Ellroy",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0995/9780099537861.jpg"

 )
 const you = new items(
    
 )