class Celebs{
    name:string;
    genre:string;
    tikTokName:string;
    instagramName:string;
    numOfFollowers:number;

    constructor(name:string, genre:string, tikTokName:string, instagramName:string, numOfFollowers:number) {
        this.name = name;
        this.genre = genre;
        this.tikTokName = tikTokName;
        this.instagramName = instagramName;
        this.numOfFollowers = numOfFollowers;
    }

    setNumOfFollowers(num:number) {
        this.numOfFollowers = num;
    }

    getNumOfFollowers():number {
        return this.numOfFollowers;
    }

    toString():string {
        return `${this.name} Tiktok account is ${this.tikTokName} and the account has ${this.numOfFollowers} followers.`
    }
}

const lebron:Celebs = new Celebs("Lebron", "Basketball", "LBJ", "LBJ", 4000000);
const roi:Celebs = new Celebs("Roi", "Soccer", "Roi", "Roi", 2309874);
const omer:Celebs = new Celebs("Omer", "Dancing", "Omer", "Omer", 123454);
const guy:Celebs = new Celebs("Guy", "Clothes", "Guy", "Guy", 56732);
const dorit:Celebs = new Celebs("Dorit", "Clothes", "Dorit", "Dorit", 5643);
const rafi:Celebs = new Celebs("Rafi", "Clothes", "Rafi", "Rafi", 8765432);
const ben:Celebs = new Celebs("Ben", "Clothes", "Ben", "Ben", 23540500);

const arr:Celebs[] = [lebron, roi, guy ,omer, dorit, rafi, ben];

function who(arr:Celebs[]) {
    for(const i in arr) {
        console.log(arr[i].toString())
    }
}

who(arr);

function whoHasMost(arr:Celebs[]):Celebs[] {
    let newArr:Celebs[] = arr;
    for(let i = newArr.length-1; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            if(newArr[j].numOfFollowers < newArr[j+1].numOfFollowers) {
                let temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
    }
    return newArr;
}
console.log("-------------")
const celebWithMostFollowers = whoHasMost(arr)[0];
console.log(`The celeb with the most foolowers is ${celebWithMostFollowers.name} with ${celebWithMostFollowers.numOfFollowers} followers`);

console.log("-------------")






class Datee {
    day:number;
    month:number;
    year:number;
    hours:number;
    minutes:number;
    seconds:number;

    constructor(day:number, month:number, year:number, hours:number, minutes:number, seconds:number) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    addZero(num:number):string {
        let str:string = "";
        if(num<10) {
            str += "0"+num.toString();
        } else {
            str += num.toString();
        }
        return str;
    }

    toString(this:Datee):string {
        let day:string = this.addZero(this.day);
        let month:string = this.addZero(this.month);
        let year:string;
        let hours:string = this.addZero(this.hours);
        let minutes:string = this.addZero(this.minutes);
        let seconds:string = this.addZero(this.seconds);
        if(this.year<1000) {
            year = "0"+this.year.toString();
        } else if(this.year<100) {
            year = "00"+this.year.toString();
        } else if(this.year<10) {
            year = "000"+this.year.toString();
        } else {
            year = this.year.toString();
        }
        return `${day}/${month}/${year} and ${hours}/${minutes}/${seconds}`
    }
}

const d1:Datee = new Datee(1,5,1998, 2, 4, 7);

console.log(d1.toString());

