let userInput;

userInput = prompt(`joe biden age?`)

console.log(oneToNum(parseInt(userInput)))
alert(oneToNum(parseInt(userInput)))


function oneToNum(n:number){
    n= n/2*(1+n);
    //let total; for(let i = 0; i <= n; i++){ total += i; } return total         
    return n
}