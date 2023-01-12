class celeb {
    name: string;
    gender: string;
    tikTokAccount: string;
    instagramAccount: string;
    numberOfFollowers: number;

    constructor(name: string, gender: string, tikTokAccount: string, instagramAccount: string, numberOfFollowers: number) {
        this.name = name;
        this.gender = gender;
        this.tikTokAccount = tikTokAccount;
        this.instagramAccount = instagramAccount;
        this.numberOfFollowers = numberOfFollowers;
    }

    setFollowers(numberOfFollowers: number) {
        this.numberOfFollowers = numberOfFollowers;
    }

    getFollowers(): number {
        return this.numberOfFollowers;
    }

    getName(): string {
        return this.name;
    }

}

const karin = new celeb("karin", "female", "karinLevi.tiktok", "karinLevi@instagram", 123666)
const nir = new celeb("nir", "male", "nirLevi.tiktok", "nirLevi@instagram", 137866)
const romi = new celeb("romi", "female", "romiLevi.tiktok", "romiLevi@instagram", 3666)
const or = new celeb("or", "male", "orLevi.tiktok", "orLevi@instagram", 47566)

const celebs = [karin, nir, romi, or]

function mostFollowers(celebs: celeb[]): string {
    let celebWithMostFollowers = 0;
    let mostFollowers = 0;
    for (let i = 0; i < celebs.length; i++) {
        if (celebs[i].getFollowers() > mostFollowers) {
            mostFollowers = celebs[i].getFollowers();
            celebWithMostFollowers = i;
        }
    }

    return celebs[celebWithMostFollowers].getName()
}

function sortByFollowers(celebs: celeb[]): celeb[] {
    let a = celebs.sort((a, b) => b.getFollowers() - a.getFollowers());
    //console.log(a)
    return a;
}

console.log(`Here are all the celebrities: `, celebs);
console.log(`The celebrity with the most followers is ${mostFollowers(celebs)}`);
console.log(`The celebrities sorted by the number of followers:`, sortByFollowers(celebs));






