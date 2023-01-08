// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tikTokAccount, instagramAccount, numberOfFollowers) {
        this.name = name,
            this.genre = genre,
            this.tikTokAccount = tikTokAccount,
            this.instagramAccount = instagramAccount,
            this.numberOfFollowers = numberOfFollowers;
    }
    return Celeb;
}());
var deadpool = new Celeb("deadpool", "comics", "tikpool", "deadgram", 1);
console.dir(deadpool);
// 3. create a function that gets all the celebs and returns the celeb with the most followers.
//  Even better, return a list of celebs, ordered by their number of followers.
///WIP///
//     const wolverine = new Celeb(`wolverine`, `comics`, `wolvetok`, `instarine`, 2);
//     const xavier = new Celeb(`xavier`, `comics`, `profex`, `px2023`, 3)
// const celebsList: Celeb[] = [deadpool, wolverine, xavier]
// function mostFollowers(obj: Celeb[]) {
//     try {
//      let most = Math.max(obj.numberOfFollowers[]);
//      for (let i=0; i< arguments.length; i++){
//         if (arguments[i].length > max)
//      }
//     }
//     catch (error) {
//     }
// }
// function longestString() {
//     let longest = '';
//     for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i].length > longest.length) {
//         longest = arguments[i];
//       }
//     }
//     return longest;
//   }
