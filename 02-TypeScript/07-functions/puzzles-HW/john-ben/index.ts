//ex1-1
// let num = 32243
// function negative_Number (num:number){
//     if (num < 0){
//         return num;
//     }
//     else{
//         let x = num * -1
//         return x 
//     }
// }
//     console.log(`the negative number of ${num}is ${negative_Number(num)}`)



// ex 2-1
//  let numero1 = 555
//  let numero2 = 555

//  function is_higer (numero1:number,numero2:number){
//     if(numero1 == numero2){
//         return console.log("this is the same number")
//     }
//     else{
//     return Math.max(numero1,numero2)
//     }
//  }
//  console.log(`the biggest number is ${is_higer(numero1,numero2)}`)



//ex3:
let num = 566 

function reversed_Num(num:number) {
    return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))                 
  }
  console.log(`the reverse number of ${num} is ${reversed_Num(num)}`)
