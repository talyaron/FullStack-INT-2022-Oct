function multi(a:number, b:number): number{
    return a * b;
}

function addUp(n: number): number{
    let x: number = 0;
    for(let i = 1; i <= n; i++){
        x += i;
    }
    return x;
}

console.log(multi(3, 4));

console.log(addUp(10));