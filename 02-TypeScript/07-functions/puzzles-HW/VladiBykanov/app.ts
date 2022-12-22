function reverseNum(num: number): number{
    let numString = num.toString();
    let reverseNum = numString.split('').reverse().join('');
    return parseInt(reverseNum);
}



console.log(reverseNum(123))