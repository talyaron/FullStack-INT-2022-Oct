class celeb {
    name:string;
    genre:string;
    tiktokAccount:string;
    instagramAccount:string;
    follower:number;
    
    constructor(name:string,genre:string,tiktokAccount:string,instagramAccount:string,follower:number){
        this.name=name;
        this.genre=genre;
        this.tiktokAccount=tiktokAccount;
        this.instagramAccount=instagramAccount;
        this.follower=follower;

    }

    setTiktokFollowerCount(num:number){
        this.follower=num;
    }
    getTiktokFollowerCount(){
        return this.follower;
    }

    setinstagramFollowerCount(num:number){
        return this.follower=num;
        
    };
    getinstagramFollowerCount(){
        return this.follower;
    }
    tostring(){
        return `${this.name} have ${this.follower} on tiktok `
       
    }
    }
    



const bradPitt = new celeb ("Brad Pitt","actor","none",'none',0);
const janeDoe = new celeb ("jane doe","singer","jane_dow123",'janie',10005);
const personMini = new celeb ("person mini","author","miniperson",'none',41000);


const celebs:celeb[] = [bradPitt,janeDoe,personMini];
function addedConsole(celebs:celeb[]){
    for(const x in celebs){
        console.log(celebs[x].tostring())
    }
}
addedConsole(celebs)

const mostFollowers= celebs.sort((a, b) => a.follower - b.follower)[celebs.length-1];
console.log(`${mostFollowers.name} has the most followers on tiktok ,they have ${mostFollowers.follower}`);

