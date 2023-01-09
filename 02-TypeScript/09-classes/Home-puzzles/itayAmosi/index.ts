// task 1
class Celebs {
  name: string;
  age: number;
  instagram: boolean;
  tiktok: boolean;
  followersIsntagram: number;
  followersTiktok: number;
  followers: number;

  constructor(
    name: string,
    age: number,
    instagram: boolean,
    tiktok: boolean,
    followersIsntagram: number,
    followersTiktok: number,
    followers: number
  ) {
    this.name = name;
    this.age = age;
    this.instagram = instagram;
    this.tiktok = tiktok;
    this.followersIsntagram = followersIsntagram;
    this.followersTiktok = followersTiktok;
    this.followers = followers;

  }

  // task 2
  setFollowers(followers: number) {
    this.followers = followers;
  }
  
  getFollowers(): number | undefined {
    return this.followers;
  }

}

const yodaLevi = new Celebs (`Yoda Levi`, 43, true, false, 150000, 0, 148);
const fiftiCent = new Celebs (`50cent`, 47, true, true, 1500000, 3000000, 100);
const barrefaeli = new Celebs (`Bar Refaeli`, 33, true, true, 2500000, 15000000, 1875);
const bibi = new Celebs (`Bibi netanyaho`, 74, true, true, 35000000, 12000000, 12000);
const personss: Celebs[] = [yodaLevi, fiftiCent, barrefaeli, bibi];

console.log(yodaLevi);
console.log(fiftiCent);
// console.log(`we add new ${yodaLevi.followers} follwers to ${yodaLevi.name}`);
yodaLevi.followers=100+500;
console.log(yodaLevi.followers);

`--`
// task 3

personss.sort((a, b) => b.followers - a.followers);
console.log(personss);

