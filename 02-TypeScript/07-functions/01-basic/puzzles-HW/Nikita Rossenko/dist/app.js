// Level 1____________________________________
// 1)
function negativeNumber(num) {
    return num * (-1);
}
console.log(negativeNumber(20));
// 2)
function squareNumber(num) {
    return Math.sqrt(num);
}
console.log(squareNumber(20));
// 3)
function celToFahr(num) {
    return (num * 9 / 5) + 32;
}
console.log(celToFahr(10));
// level 2____________________________________
// 1)
function largerOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log(largerOfTwo(10, 20));
// 2)
function heightToGender(height, gender) {
    if (gender === 'male') {
        return height - 174;
    }
    else {
        return height - 163;
    }
}
console.log(heightToGender(170, 'male'));
// Level 3____________________________________
// 1)
function reverseNumber(num) {
    var digit, result = 0;
    while (num) {
        digit = num % 10;
        result = (result * 10) + digit;
        num = num / 10 | 0;
    }
    return result;
}
console.log(reverseNumber(1234));
