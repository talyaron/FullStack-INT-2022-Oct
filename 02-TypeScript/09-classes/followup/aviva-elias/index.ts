class Video{
   movieName:string;
    price:number;
    constructor(movieName:string,price:number){
        this.movieName=movieName;
        this.price=price;
    }
    toNIS(){
        return this.price*3.45
    }
};
 const Xman=new Video("Xman",5)
 const piterpan=new Video("piterpan",6)
 const ironman=new Video("ironman",5)
 console.log( Xman.toNIS())
console.log(piterpan.movieName)
 