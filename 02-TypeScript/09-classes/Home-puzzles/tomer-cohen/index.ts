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
  setNumOfFollowrs() {
    let numberOfFollower: string | null = null;
    if (!numberOfFollower || !isNaN(numberOfFollower)) { 
    }
    return this.numOfFollowers;
    
  }
  getNumOfFollowrs() {
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

const messi = new Celebs(
  `messi`,
 `football`,
  `leomessi`,
  `leomessi`,
  416);
console.dir(kendalljenner)
console.dir(messi)


