// Level 1____________________________________
// 1)
function negativeNumber(num:number):number {
    return num*(-1);
}
console.log(negativeNumber(20));

// 2)
function squareNumber(num:number):number{
    return Math.sqrt(num);
} 
console.log(squareNumber(20));

// 3)
function celToFahr(num:number):number {
    return (num*9/5)+32;
}
console.log(celToFahr(10));

// level 2____________________________________
// 1)
function largerOfTwo(num1:number,num2:number):number {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(largerOfTwo(10,20));

// 2)
function heightToGender(height:number,gender:string):number {
    if (gender === 'male') {
        return height - 174;
    } else {
        return height - 163;
    }
}
console.log(heightToGender(170,'male'));

// Level 3____________________________________
// 1)
function reverseNumber(num:number):number {
    let digit, result = 0

    while(num){
        digit = num % 10
        result = (result * 10) + digit
        num = num/10|0
    }  
    return result
}
console.log(reverseNumber(1234));


