class Celeb {
    name: string;
    genre: string;
    instagramAccount?: string;
    tiktokAccount?: string;
    follower: number;


    constructor(name: string, genre: string, instagramAccount: string, tiktokAccount: string, follower: number) {
        this.name = name;
        this.genre = genre;
        this.instagramAccount = instagramAccount;
        this.tiktokAccount = tiktokAccount;
        this.follower = follower

    }
    setFollower(number: number): number {
        return this.follower = number
    }

    getFollwer() {
        return this.follower
    }

    whoHasAccount() {

        if (this.tiktokAccount !== "") {
            return this.tiktokAccount
        }
        else {
            return "unknown"
        }

    }


}




const messi = new Celeb("messi", "sport", "messi_num1", "messi_still-num1", 1000000);
const bibi = new Celeb("Benjamin Netanyahu ", "politics", "bibi_Still_rule", "bibi_123", 200000);
const rachel = new Celeb("rachel imenu", "holiness", "", "", 17000000);


console.log(`${messi.name} have ${messi.getFollwer()} followers`)
const newFollower = messi.setFollower(3000000)
console.log(`${messi.name} update is followers and now they are ${newFollower} `)


console.log(`Tiktok acount of ${messi.name} is: ${messi.whoHasAccount()}`)
console.log(`Tiktok acount of ${rachel.name} is: ${rachel.whoHasAccount()}`)

const celebsArray: Celeb[] = [messi, bibi, rachel];

function clebHightesFollowers() {
    for (let i = 0; i < celebsArray.length; i++) {

        if (celebsArray[0].follower > (celebsArray[1].follower) && celebsArray[0].follower > (celebsArray[2].follower)) {
            return celebsArray[0].name
        }
        else if (celebsArray[1].follower > (celebsArray[2].follower) && (celebsArray[1].follower > celebsArray[0].follower)) {
            return celebsArray[1].name
        }
        else { return celebsArray[2].name }
    }

}

const result = clebHightesFollowers()
console.log(`${result} have The hightes num of followers :${celebsArray[2].follower}`)