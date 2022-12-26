const num1 = 10;
const num2 = 4;
function multiply(number1:number,number2:number){
    return number1*number2;
}
console.log(multiply(num1,num2));







function multiplay2(numOne:number):number{
    let sum:number = 0;
    for (let i = 1 ; i <= numOne ; i++){
            sum = sum + i;
    }
    return sum;
}
console.log(multiplay2(10));