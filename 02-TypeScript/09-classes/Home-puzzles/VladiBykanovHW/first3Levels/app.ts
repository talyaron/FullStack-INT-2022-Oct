const celebrityList: Celebrity[] = [];

class Celebrity {
  name: string;
  ganre: string;
  tiktok: boolean;
  instagram: boolean;
  followersAmount: number;

  constructor(
    name: string,
    ganre: string,
    tiktok: boolean,
    instagram: boolean,
    followersAmount: number = 0
  ) {
    this.name = name;
    this.ganre = ganre;
    this.tiktok = tiktok;
    this.instagram = instagram;
    this.followersAmount = followersAmount;
  }

  get NumberOffFollowers() {
    return this.followersAmount;
  }

  set NumberOffFollowers(num: number) {
    this.followersAmount = num;
  }
}

const eminem = new Celebrity("Marshall Mathers", "Male", true, true);
const cristianoJr = new Celebrity("Cristiano Ronaldo", "Male", false, true);
const rihanna = new Celebrity("Rihanna", "Female", true, true);
const jenniferAni = new Celebrity("Jennifer Aniston", "Female", false, true);
const ryanRynolds = new Celebrity("Ryan Reynolds", "Male", true, true);

eminem.NumberOffFollowers = 4200000 + 37700000;
cristianoJr.NumberOffFollowers = 529000000;
rihanna.NumberOffFollowers = 6900000 + 139000000;
jenniferAni.NumberOffFollowers = 41100000;
ryanRynolds.NumberOffFollowers = 4720000 + 21100000;



const addCelebsToList = (celeb: Celebrity) => celebrityList.push(celeb);
addCelebsToList(eminem);
addCelebsToList(cristianoJr);
addCelebsToList(rihanna);
addCelebsToList(jenniferAni);
addCelebsToList(ryanRynolds);

//sort celebrities from most followers to least followers
function rateCelebs() {
  return [...celebrityList].sort((a, b) => b.followersAmount - a.followersAmount);
}

console.log(celebrityList); //original list
console.log(rateCelebs()); //sorted list
console.log(celebrityList); //original list