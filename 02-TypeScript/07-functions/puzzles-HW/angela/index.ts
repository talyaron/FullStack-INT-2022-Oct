// ***level 1***
// 1.1
console.log("**level 1**")
function negative (number:number) {
    return -Math.abs(number);
}
const massageStr = prompt("choose a number")
if (massageStr){
    const massage = parseInt(massageStr)
    console.log(`1.1) ${negative(massage)}`)
}
// 1.2
function square (num:number){
    return Math.sqrt(num)
}
console.log(`1.2) ${square(12).toFixed(3)}`);

// 1.3
function Fahrenheit (celsius:number){
    return ( celsius* 9/5)+32
}
console.log(`1.3) ${Fahrenheit(15)}°f `);

// ***level 2***
// 2.1
console.log("**level 2**")
function max (num1:number,num2:number){
    return Math.max(num1,num2)

}
console.log(`2.1) ${max(3,9)}`);
// 2.2

function avrageHeight (gender:string,height:number){
    if (gender=="male"){
        return height-174
    } else if (gender=="woman"||"female"){
        return height-160
    }
    
}
const gender=prompt("what is your bio gender?")
if (gender== " " ||!gender ){
        alert("please enter a gender");
    }
if (gender=="male"||"man"){
    let heightStr=prompt("what is your height?")
    if (heightStr){
        const height = parseInt(heightStr)
        console.log(`2.2) you are a ${gender} and your height is ${height} ,compared to the average population you are taller or shorter by ${avrageHeight(gender,height)}cm`)
}else if (gender=="woman"||"female"){
        let heightStr=prompt("what is your height?")
    if (heightStr){
        const height = parseInt(heightStr)
        console.log(`2.2) you are a ${gender} and your height is ${height} ,compared to the average population you are taller or shorter by ${avrageHeight(gender,height)}cm`)
    }
    
}
}
// ***level 3***
console.log("**level 3**")
function reversedNum(num:number) {
    return (
        num
        .toString()
        .split('')
        .reverse()
        .join('')
    )
           
  }
console.log(`3) ${reversedNum(6543.21)}`)