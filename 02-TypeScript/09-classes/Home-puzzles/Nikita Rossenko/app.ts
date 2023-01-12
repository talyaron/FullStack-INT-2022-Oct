// 1)
class influancer {
    name:string;
    genre:string;
    tiktokUsername:string;
    instagramUsername:string;
    followers:number;

    constructor (name:string,genre:string,tiktokUsername:string,instagramUsername:string,followers:number){
        this.name = name;
        this.genre = genre;
        this.tiktokUsername = tiktokUsername;
        this.instagramUsername = instagramUsername;
        this.followers = followers;
    }

// 2)
    addFollowers(setfollowers:number) {
        this.followers = this.followers + setfollowers;
    }

    getFollowers() {
        return this.followers;
    }

}

const sideman = new influancer ("Sideman", "Intertament","Sideman","Sideman",17500000);
const recrent = new influancer ("Recrent", "Gaming","Recrent","Recrent",570000);
const dudeperfect = new influancer ("Dude Perfect", "Intertament","DudePerfect","DudePerfect",58500000);

recrent.addFollowers(10);
sideman.addFollowers(100);
dudeperfect.addFollowers(1000);

console.log(`${recrent.name}'s TikTok username is ${recrent.tiktokUsername}`);
console.log(`${sideman.name}'s TikTok username is ${sideman.tiktokUsername}`);
console.log(`${dudeperfect.name}'s TikTok username is ${dudeperfect.tiktokUsername}`);
