function multiplication(a:number,b:number):number{
return a*b
}
const a:number=5
const b:number=4

console.log(multiplication(a,b))

function addUp(n: number): number{
    let x: number = 0;
    for(let i = 1; i <= n; i++){
        x += i;
    }
    return x;
}



console.log(addUp(10));