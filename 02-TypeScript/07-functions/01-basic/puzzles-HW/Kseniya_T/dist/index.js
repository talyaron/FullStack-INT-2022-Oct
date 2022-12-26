var negativeNum = function (num) {
    return -Math.abs(num);
};
var celToFer = function (celDegree) {
    return celDegree * 1.8 + 32;
};
var largerNum = function (firstNum, secondNum) {
    if (firstNum === secondNum) {
        return "they are the same";
    }
    //return condition ?(if) true :(else) false
    return firstNum > secondNum ? firstNum : secondNum;
};
var heightRelativeToGender = function (height, gender) {
    var avgMaleHeight = 174;
    var avgFemaleHeight = 161;
    return gender === "male" ? avgMaleHeight - height : avgFemaleHeight - height;
};
var reverseNum = function (num) {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
};
negativeNum(23);
celToFer(30);
largerNum(40, 21);
largerNum(12, 12);
