function reverseNum(num) {
    var numString = num.toString();
    var reverseNum = numString.split('').reverse().join('');
    return parseInt(reverseNum);
}
console.log(reverseNum(123));
