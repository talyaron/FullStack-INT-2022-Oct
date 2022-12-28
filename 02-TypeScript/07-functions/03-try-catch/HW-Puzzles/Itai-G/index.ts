const numbers: Function = (num1: number , num2 :number , num3: number): Number | false {
    try {
        if (typeof num1 !== `number`|| typeof num2 !== `number`||typeof num3!==`number`){
            throw Error(`you need to enter numbers alone`);
        }
        return num1*num2*num3;
    } catch (error) {
        return false;
    }
}

let test1 = true;
const num1: any = prompt (`please enter the first number`);
const num2: any = prompt (`please enter the second number`);
const num3: any = prompt (`plaese enter the third number`);
console.log(num1*num2*num3);
if (num1 !== null && num2!== null && num3 !== null){
    if ((numbers (parseInt(num1),parseInt(num2),parseInt(num3)))){
        (`the answar is ${numbers(parseInt(num1),parseInt(num2),parseInt(num3))}`);
    }
}else{
    alert("you have enterd not all numbers plaese enter numbers");
}
