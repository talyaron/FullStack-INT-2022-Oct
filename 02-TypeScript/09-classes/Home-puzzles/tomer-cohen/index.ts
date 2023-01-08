class Celebs {
  name: string;
  genre: string;
  nameTikTok: string;
  nameInstegram: string;
  numOfFollowers: number;
  constructor(
    name: string,
    genre: string,
    nameTikTok: string,
    nameInstagram: string,
    numOfFollowers: number
  ) {
    name = this.name;
    genre = this.genre;
    nameTikTok = this.nameTikTok;
    nameInstagram = this.nameInstegram;
    numOfFollowers = this.numOfFollowers;
  }
  setFollowers(followers: number) {
    this.numOfFollowers = followers;
  }
  
  getFollowers(): number  {
    return this.numOfFollowers;
  }
}

const kendalljenner = new Celebs(
  `kendall jenner`,
  `model`,
  `kendalljenner`,
  `kendalljenner`,
  269
);
const tomer= new Celebs(`tomer`,`tomer`,`tpmer`,`tomer`,421)
console.dir(kendalljenner)
console.log(tomer)


