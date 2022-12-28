const threeNumbers: Function =(num1:number,num2:number,num3: number): number | false =>{
    try {
        if(typeof num1 !== `number` ||typeof num2 !== `number` || typeof num3 !==`number`){
            throw new Error(`not a number`);  
        }
        return num1*num2*num3;
    } catch (error){
        console.error(error);
        return false;
    }
}

let numberAllow = true;
while (numberAllow) {
    const num1:any = prompt("what is your first number");
    const num2:any = prompt("what is your second number");
    const num3:any = prompt("what is your third number");
    if (num1 !== null && num2 !== null && num3 !== null) {
        if (threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3))) {
            alert(`The answer is ${num1*num2*num3}`)
            numberAllow = false;
        }else{
            alert(`must be a number`)
        }
    } else {
        alert("You left some lines empty")
        console.error("You left some lines empty")
    }

    console.log(num1*num2*num3)

}
