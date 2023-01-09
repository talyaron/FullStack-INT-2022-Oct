class Celeb {
  name: string;
  genre: string;
  tiktok: string;
  insta: string;
  numberFollowers: number;
  constructor(name: string, genre: string, tiktok: string, insta: string, numberFollowers: number){
    this.name = name;
    this.genre = genre;
    this.tiktok = tiktok;
    this.insta = insta;
    this.numberFollowers = numberFollowers
  }

  setNumFollowers(number: number){
    return this.numberFollowers = number;
  }

  getNumFollowers(){
    return this.numberFollowers;
  }
}


const kendalljenner = new Celeb(
  `kendall jenner`,
  `model`,
  `kendalljenner`,
  `kendalljenner`,
  269
);

const tomer = new Celeb ('Tomer', 'Male', 'TomerTiktok', 'tomerInsta', 1000000)

console.dir(kendalljenner);
console.log(tomer);