//test1//

let a:number= 2;
let b:number= 6;

function x2(a:number,b:number):number{
    return a*b
}
console.log(x2(a,b))


//test 2//


const n:number=10;
function sum(n:number){
    let result:number = 0
    for(let i=1; i<=n; i++){
        result+=i
    }
    return result
}
console.log(sum(n))
