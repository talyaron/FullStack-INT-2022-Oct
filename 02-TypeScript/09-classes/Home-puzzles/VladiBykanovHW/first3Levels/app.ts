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

    celebrityList.push(this);
  }

  get NumberOffFollowers() {
    return this.followersAmount;
  }

  set NumberOffFollowers(num: number) {
    this.followersAmount = num;
  }
}

const cristianoJr = new Celebrity("Cristiano Ronaldo", "Male", false, true);
const rihanna = new Celebrity("Rihanna", "Female", true, true);
const jenniferAni = new Celebrity("Jennifer Aniston", "Female", false, true);
const ryanRynolds = new Celebrity("Ryan Reynolds", "Male", true, true);
const eminem = new Celebrity("Marshall Mathers", "Male", true, true);

cristianoJr.NumberOffFollowers = 529000000;
rihanna.NumberOffFollowers = 6900000 + 139000000;
jenniferAni.NumberOffFollowers = 41100000;
ryanRynolds.NumberOffFollowers = 4720000 + 21100000;
eminem.NumberOffFollowers = 4200000 + 37700000;

console.log(
  `${cristianoJr.name} has ${cristianoJr.NumberOffFollowers} followers`
);
console.log(celebrityList);

//sort celebrities from most followers to least followers
function rateCelebs() {
  const sortedList = [...celebrityList];
  return sortedList.sort((a, b) => b.followersAmount - a.followersAmount);
}

console.log(rateCelebs());
