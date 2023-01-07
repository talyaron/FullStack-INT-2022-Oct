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
    while (!numberOfFollower || !isNaN(numberOfFollower)) {
      prompt(`enter the number of the followers`);
    }
    this.numOfFollowers = parseInt(numberOfFollower);
    console.log(numberOfFollower);
    return this.numOfFollowers;
  }
  getNumOfFollowrs(){
    return this.numOfFollowers;
  }
}

const kendalljenner= new Celebs(`kendall jenner`,`model`,`kendalljenner`,`kendalljenner`,269);
kendalljenner.setNumOfFollowrs();
