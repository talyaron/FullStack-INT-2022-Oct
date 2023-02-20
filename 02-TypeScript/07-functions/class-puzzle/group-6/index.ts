const nStr = prompt ("Enter a number:");
let n;
if (nStr) {
    n = parseInt(nStr);
}
console.log(`your number is ${n}`);
console.log(`the result is ${zeroToN(n)}`);

function zeroToN (n:number):number{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
