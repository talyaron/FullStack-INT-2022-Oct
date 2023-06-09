class Celebs {
    name :string;
    genre:string;
    account_tiktok:string;
    account_instagram:string;
    followers:number


    constructor(name:string,genre:string,account_tiktok:string,account_instagram:string,followers:number) {
      this.name = name;
      this.genre = genre;
      this.account_tiktok = account_tiktok;
      this.account_instagram = account_instagram;
      this.followers = followers

    }

    setFollowers(num:number){
        this.followers=num;
    }
    getFollowers(){
        return this.followers;
    }

}
const messi = new Celebs ("Messi","male","leo10","leomessi",248000000)
const neymar = new Celebs ("Neymar","male","ney_jr","neymarjr",168000000)
const ronaldo = new Celebs ("Ronaldo","male","cr7","cristiano",368000000)


console.log(neymar)
console.log(neymar.followers)
neymar.setFollowers(10)
console.log(neymar.followers)



const CelebsList = [neymar,messi,ronaldo]

function rateCelebs() {
    return [...CelebsList].sort((a, b) => b.followers - a.followers);
  }

  console.log(CelebsList)
  console.log(rateCelebs())
