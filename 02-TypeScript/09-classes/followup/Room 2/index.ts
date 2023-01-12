//create classes for video, with method which convert price from dollars to NIS
//create several video object


class Video {
    name:string;
    price:number;
    dateOfCreation:number;

    
constructor (name:string , price:number , dateOfCreation:number){
this.name = name
this.price = price
this.dateOfCreation = dateOfCreation
}
dollarToShekel () {
    return this.price * 3.56;
}
}
const avatar = new Video ("avatar" , 20, 2008)
console.log(avatar.dollarToShekel())
