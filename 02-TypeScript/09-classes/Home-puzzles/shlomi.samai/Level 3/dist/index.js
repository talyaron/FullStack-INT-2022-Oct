var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktokAccount, instagramAccount, numberOfFollowers) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccount = instagramAccount;
        this.numberOfFollowers = numberOfFollowers;
    }
    Celeb.prototype.getFollowers = function () {
        console.log(this.numberOfFollowers);
        return this.numberOfFollowers;
    };
    Celeb.prototype.serFollowers = function (newFolloers) {
        this.numberOfFollowers = newFolloers;
        console.log(this.numberOfFollowers);
    };
    return Celeb;
}());
var brad = new Celeb("Brad", "Action", 123, 456, 789);
var james = new Celeb("james", "Drama", 741, 5852, 2000000);
var bill = new Celeb("bill", "PF", 321654, 456789, 789);
var joan = new Celeb("joan", "horror", 962156, 468, 8742);
brad.getFollowers();
brad.serFollowers(1000000);
var celebsArray = [brad, james, bill, joan];
function sortArray(array) {
    var i = 0;
    var j = 0;
    var newArray = [];
    for (i = 0; i <= array.length - 1; i++) {
        newArray[i] = array[i].numberOfFollowers;
    }
    var sortedArray = newArray.sort(function (a, b) {
        return b - a;
    });
    console.log(sortedArray);
    var sortedClasses = [];
    for (i = 0; i <= sortedArray.length - 1; i++) {
        // console.log(i)
        for (j = 0; j <= sortedArray.length - 1; j++) {
            //console.log(j)
            if (sortedArray[i] === array[j].numberOfFollowers) {
                sortedClasses[i] = array[j];
            }
        }
    }
    return sortedClasses;
}
console.log(sortArray(celebsArray));
