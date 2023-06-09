// task 1-2

class Celebs {
    name: string;
    age: number;
    instagram: boolean;
    tiktok: boolean;
    followersIsntagram: number;
    followersTiktok: number;
    followers:number;
  
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
    setFollowers(followers: number) {
      this.followers = followers;
    }
    
    getFollowers(): number | undefined {
      return this.followers;
    }
  }
  
  const yodaLevi = new Celebs (`Yoda Levi`, 43, true, false, 150000, 0,234 );
  const fiftiCent = new Celebs (`50cent`, 47, true, true, 1500000, 3000000,2346 );
  console.log(yodaLevi);
  console.log(fiftiCent);

  yodaLevi.setFollowers(2000);
  console.log(yodaLevi.getFollowers()); //to invoke
  const arrCelebs = [yodaLevi,fiftiCent];
  arrCelebs.sort((a, b) => b.followers - a.followers);

  console.log(arrCelebs)