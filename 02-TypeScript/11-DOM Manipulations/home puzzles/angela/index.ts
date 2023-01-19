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
   
    constructor(
       public bookTitle:string,
       public price:number,
       public catagory:string,
       public auther:string,
       public image:string,
    ){}
}
const items:books[]=[];
const you = new items(
    "You",
    46.21,
    "crime",
    " Caroline Kepnes",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471137372.jpg"
)

console.log(items);