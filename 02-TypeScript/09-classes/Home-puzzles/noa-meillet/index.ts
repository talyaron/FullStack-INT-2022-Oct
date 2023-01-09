/*
1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
   Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by
 their number of followers.

4. Create a class for dates. the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for
 instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format 
 "2 seconds past from that date"
*/ 

class Celebs{
    name: string;
    genre: string;
    accountInTiktok: string;
    accountInInstagram: string;
    numberOfFollowers: number;

    constructor(name: string, genre: string, accountInTiktok: string, accountInInstagram: string, numberOfFollowers: number,){
        this.name= name;
        this.genre= genre;
        this.accountInTiktok= accountInTiktok ;
        this.accountInInstagram= accountInInstagram;
        this.numberOfFollowers= numberOfFollowers
    }

    setNumOfFollowers(){
        let numberOfFollower;
        while(!numberOfFollower || isNaN(this.numberOfFollowers)){
            numberOfFollower= prompt(`enter the number of follower of this celeb:`)
            this.numberOfFollowers= parseInt(numberOfFollower);
        } 
        return this.numberOfFollowers;
    }

    getNumOfFollowers(){
        return this.numberOfFollowers;
    }
}

let shlomiShabat = new Celebs("shlomi Shabat","singer","shlomi123","shlomi123",400);
let NoaKirel = new Celebs("noa kirel","singer","noa123","noa123",400000);
let hananBenAri = new Celebs("hanan ben ari","singer","hba123","hba123",2000);

shlomiShabat.getNumOfFollowers();
shlomiShabat.setNumOfFollowers();

let celebsArr:Celebs[]= [shlomiShabat, NoaKirel, hananBenAri];

let ishayRibo = createCeleb();
if (ishayRibo){
    celebsArr.unshift(ishayRibo);
}

alert(whoHasTheMostFolowers(celebsArr));

function whoHasTheMostFolowers(celebsArr:Celebs[]): string | false{
    try {
        if (celebsArr.length==0){
            throw new Error(`there is no celebs in the list`);
        }
        let maxFollowers= celebsArr[0];
        for (let i=1; i< celebsArr.length; i++){
            if (maxFollowers.getNumOfFollowers() < celebsArr[i].getNumOfFollowers()){
                maxFollowers= celebsArr[i];
            }
        }
        return maxFollowers.name;
    } catch (error) {
        console.error(error);
        return false;
    }
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


