var Celebs = /** @class */ (function () {
    function Celebs(name, genre, accountInTiktok, accountInInstagram, numberOfFollowers) {
        this.name = name;
        this.genre = genre;
        this.accountInTiktok = accountInTiktok;
        this.accountInInstagram = accountInInstagram;
        this.numberOfFollowers = numberOfFollowers;
    }
    return Celebs;
}());
var shlomiShabat = new Celebs("shlomi Shabat", "singer", "shlomi123", "shlomi123", 400);
var NoaKirel = new Celebs("noa kirel", "singer", "noa123", "noa123", 400000);
var hananBenAri = new Celebs("hanan ben ari", "singer", "hba123", "hba123", 2000);
var celebsArr = [shlomiShabat, NoaKirel, hananBenAri];
console.log(celebsArr[-1].name);
/*
let ishayRibo = createCeleb();
if (ishayRibo){
    celebsArr.unshift(ishayRibo);
}


function createCeleb(): Celebs | false {
    try {
      let name;
      let genre;
      let accountInTiktok;
      let accountInInstagram;
      let numberOfFollowers;

      while (!name) {
        name = prompt("What is the celeb name?");
      }
  
      while (!genre) {
        genre = prompt("enter the genre of the celeb?");
      }

      while (!accountInTiktok) {
        accountInTiktok = prompt("enter the name of the account of the celeb on Tiktok :");
      }

      while (!accountInInstagram) {
        accountInInstagram = prompt("enter the name of the account of the celeb on Instagram :");
      }

      while (!numberOfFollowers || isNaN(numberOfFollowers)){
        numberOfFollowers = prompt("enter the amount of the followers of the celeb on social media :");
        numberOfFollowers= parseInt(numberOfFollowers);
      }
  
      const celeb = new Celebs(name, genre, accountInTiktok, accountInInstagram, numberOfFollowers);
  
      return celeb;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

*/
