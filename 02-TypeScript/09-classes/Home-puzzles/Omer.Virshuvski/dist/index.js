var Celebs = /** @class */ (function () {
    function Celebs(name, genre, tikTokName, instagramName, numOfFollowers) {
        this.name = name;
        this.genre = genre;
        this.tikTokName = tikTokName;
        this.instagramName = instagramName;
        this.numOfFollowers = numOfFollowers;
    }
    Celebs.prototype.setNumOfFollowers = function (num) {
        this.numOfFollowers = num;
    };
    Celebs.prototype.getNumOfFollowers = function () {
        return this.numOfFollowers;
    };
    Celebs.prototype.toString = function () {
        return this.name + " Tiktok account is " + this.tikTokName + " and the account has " + this.numOfFollowers + " followers.";
    };
    return Celebs;
}());
var lebron = new Celebs("Lebron", "Basketball", "LBJ", "LBJ", 4000000);
var roi = new Celebs("Roi", "Soccer", "Roi", "Roi", 2309874);
var omer = new Celebs("Omer", "Dancing", "Omer", "Omer", 123454);
var guy = new Celebs("Guy", "Clothes", "Guy", "Guy", 56732);
var dorit = new Celebs("Dorit", "Clothes", "Dorit", "Dorit", 5643);
var rafi = new Celebs("Rafi", "Clothes", "Rafi", "Rafi", 8765432);
var ben = new Celebs("Ben", "Clothes", "Ben", "Ben", 23540500);
var arr = [lebron, roi, guy, omer, dorit, rafi, ben];
function who(arr) {
    for (var i in arr) {
        console.log(arr[i].toString());
    }
}
who(arr);
function whoHasMost(arr) {
    var newArr = arr;
    for (var i = newArr.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (newArr[j].numOfFollowers < newArr[j + 1].numOfFollowers) {
                var temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
}
console.log("-------------");
var celebWithMostFollowers = whoHasMost(arr)[0];
console.log("The celeb with the most foolowers is " + celebWithMostFollowers.name + " with " + celebWithMostFollowers.numOfFollowers + " followers");
console.log("-------------");
var Datee = /** @class */ (function () {
    function Datee(day, month, year, hours, minutes, seconds) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    Datee.prototype.addZero = function (num) {
        var str = "";
        if (num < 10) {
            str += "0" + num.toString();
        }
        else {
            str += num.toString();
        }
        return str;
    };
    Datee.prototype.toString = function () {
        var day = this.addZero(this.day);
        var month = this.addZero(this.month);
        var year;
        var hours = this.addZero(this.hours);
        var minutes = this.addZero(this.minutes);
        var seconds = this.addZero(this.seconds);
        if (this.year < 1000) {
            year = "0" + this.year.toString();
        }
        else if (this.year < 100) {
            year = "00" + this.year.toString();
        }
        else if (this.year < 10) {
            year = "000" + this.year.toString();
        }
        else {
            year = this.year.toString();
        }
        return day + "/" + month + "/" + year + " and " + hours + "/" + minutes + "/" + seconds;
    };
    return Datee;
}());
var d1 = new Datee(1, 5, 1998, 2, 4, 7);
console.log(d1.toString());
