//1 2

class celeb {
    nameOfGenre: string
    genre: string;
    followersOfTikTok: number;
    followersOfInstagram: number;

    constructor(nameOfGenre: string, followersOfTikTok: number, followersOfInstagram: number) {
        this.nameOfGenre = nameOfGenre;

        this.followersOfInstagram = followersOfInstagram;
        this.followersOfTikTok = followersOfTikTok;
    }
    celebs() {
        return `Name of the celebs  and the genre  ${this.nameOfGenre}  the number of followers on tiktok is  ${this.followersOfTikTok}  the number of followers on instagram is ${this.followersOfInstagram}`;
    }
}


const NameKhabyLame = new celeb("Khaby Lame Sketches Gaming video creator", 147000000, 50000000);
const NameBellaPoarch = new celeb("Bella Poarch Artist", 91000000, 13000000);
const NameLorenGrayBeech = new celeb("Loren Gray Beech Artist", 54000000, 21000000);
const Namesakira = new celeb("sakira Artist", 27000000, 78000000);


console.log(NameKhabyLame.celebs());
console.log(NameBellaPoarch.celebs());
console.log(NameLorenGrayBeech.celebs());
console.log(Namesakira.celebs());


//3)
/*
let a=147000000;
let b =91000000;
let c =27000000;
 let compareFunction =(a,b,c) =>*/

 let myNumbers = [147000000,91000000 ,27000000]  ;
 myNumbers.sort (compareFunction);
 console.log(myNumbers)
 




/*function miniMaxSum(arr) {
    var _arr = arr.sort((a, b) = > a - b)
    var minVals = _arr.slice(0, 4)
    var maxVals = _arr.slice(1)
    const arrSum = __arr = > __arr.reduce((a, b) = > a + b, 0)
    var minSum = arrSum(minVals)
    var maxSum = arrSum(maxVals)
    console.log(minSum, maxSum)
}*/
