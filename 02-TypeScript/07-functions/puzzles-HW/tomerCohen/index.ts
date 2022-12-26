var n:number=35
//level 1,1//
function negativnum(n:number):number{
    return n*-1
    
}
console.log(negativnum(n));

//level 1,2//

function squareNumbe(n:number):number{

    return (Math.sqrt(n))
}
console.log(squareNumbe(n));

//level 1,3//

function celesuisToFahrenheit(n:number):number{
    return n*1.8+32
}
console.log(celesuisToFahrenheit(n));


//level 2,1//

function largerNumber(low:number,high:number):number{
    if (low > high) {
        return low;
    } else {
        return high;
    }
}
console.log(largerNumber(1000,350));

//level 2,2//

function genderHight(avr:number,male:string){
    if (male === `male`) {
        return avr - 174;
    } 
}
console.log(genderHight(170,`male`));


// level 3,1//
function reverseNumbers(n:number){
    return ( 
     n 
    .toString()
    .split(``)
    .reverse()
    .join(``)
    )
}
console.log(reverseNumbers(n));


