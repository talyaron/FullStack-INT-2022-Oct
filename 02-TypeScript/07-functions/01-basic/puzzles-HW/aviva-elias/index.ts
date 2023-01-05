//level 1 1
//1.1
const x: number = 123
function negativReturn(x: number): number {
    return (-x)
}
console.log(negativReturn(x))

//1.2

function squareNumber(x: number): number {
    return x ** 2
}
console.log(squareNumber(x))

//1.3
const Celsius: number = 36.4
function Fahrenheit(Celsius: number): number {
    return Celsius * 9 / 5 + 32
}
console.log(Fahrenheit(Celsius))

//level 2
//2.1
const y: number = 123
function theLarger(x: number, y: number) {
    if (x > y) {
        return x
    }
    else if (x < y) { return y }
    else { return "Equals" }
}
console.log(theLarger(x, y))

//2.2


let averegeMale: number = 174
let avaregeFemale: number = 164
let gender: string = "mail" || "female"

function HeightoGender(height: number, gender: string): number {
    if (gender === "male") {
        return averegeMale - height
    }
    else if (gender === "female") {

        return avaregeFemale - height
    }

}


let gender = prompt("what is your gender ?");



if (gender) {

    let heightStr = prompt("what is your height?")
    let height = parseInt(heightStr)

    if (!isNaN(height) && heightStr !== "") {

        console.log(HeightoGender(height, gender))
    }

    else { alert("you did not enter a number") }
}


else if (gender === "") {
    if (!gender) {
        { alert("you did not enter a gender") }
    }
}






const reverseNum: Function = (num: number): number | string => {
    return (num.toString().split('').reverse().join(''))
}
// let again: boolean=true

// while(again===true){
//     const answer=prompt(" write a number pleace")

//     if(answer){
//      const num=parseInt(answer)
// if(!isNaN(num)&&(answer!=="" )){
//     console.log(reverseNum(123))
//     alert(`the rever num is ${reverseNum(123)}`)
// }
//  else{ alert("you did not write anumber")}       
//     }
//     else{alert("you did not write somthing")
//     again=false
// }
// }
let answer

// while (isNaN(num) || (answer == null)) {
//     const answer = prompt("pleas enter a number")
//     if (answer !== null) {
//         const num = parseInt(answer)

//         if (isNaN(num)) {
//             alert("you did not write anumber")
//         }
//         else {
//             console.log(reverseNum(123))
//             alert(`the revers num is ${reverseNum(123)}`)

//         }
//     }
//     else { alert("you did not write somthing") }

//}
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
