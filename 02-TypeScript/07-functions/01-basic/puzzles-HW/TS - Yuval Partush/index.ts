// console.log(-Math.abs(10));
// function negate(num){
//     return -num;
// }
// let number = 25;
// let negativenumber = negate (number);
// console.log(negativenumber)

// TypeScript - HomeWork #1

    // exercise #1
let num;
let negativenum;
document.getElementById("btn1").onclick = function (){
    num = document.getElementById("inp").value;
    negativenum = -num;
    document.getElementById("h4")?.innerHTML = `The negative number is: ${negativenum}`;
}
    // exercise #2
let num1;
let sqaure;
document.getElementById("btn2").onclick = function(){
    num1 = document.getElementById("inp1").value;
    sqaure = Math.sqrt(num1);
    document.getElementById("h41")?.innerHTML = `The Sqaure number is : ${sqaure}`;
}
    // exercise #3
let num2;
let Fah;
document.getElementById("btn3").onclick = function(){
    num2 = document.getElementById("inp2").value;
    Fah = (num2 * 1.8) + 32;
    document.getElementById("h42")?.innerHTML = `The converted number is:${Fah}*F`;
}
document.getElementById("HwBtn").onclick = function (){
    document.querySelector(".exercise1").style.display = "flex";
}
document.querySelector(".fa-circle-xmark").onclick = function(){
    document.querySelector(".exercise1").style.display = "none";
}
// TypeScript - End of HomeWork #1
document.querySelector(".fa-right-from-bracket").onclick = function(){
    document.querySelector(".exercise2").style.display = "none";
}
document.getElementById("Hw2Btn").onclick = function (){
    document.querySelector(".exercise2").style.display = "flex";
}
// TypeScript - HomeWork #2

    // exercise #1
let pnum1:number;
let pnum2:number;
document.getElementById("pbtn").onclick = function(){
pnum1 = document.getElementById("num1").value;
pnum2 = document.getElementById("num2").value;
if ((pnum1) > (pnum2)){
    document.getElementById("pp")?.innerHTML = `The Larger number is ${pnum1}`
}
else{
    document.getElementById("pp")?.innerHTML = `The larger number is ${pnum2}`
}
else if ((pnum1) === (pnum2)){
    document.getElementById("pp")?.innerHTML = `The both numbers are equals!`;
}
}

    // exercise #2
let gender;
let height;
document.getElementById("HGbtn").onclick = function(){
    gender = document.getElementById("Gender").value;
    height = document.getElementById("height").value;
    document.getElementById("HGp")?.innerHTML = `The height is:${height} and the Gender is:${gender}`;
}
// TypeScript - End of HomeWork #2


// TypeScript - HomeWork #3
document.querySelector(".fa-xmark").onclick = function(){
    document.querySelector(".exercise3").style.display = "none";
}
document.getElementById("Hw3Btn").onclick = function (){
    document.querySelector(".exercise3").style.display = "flex";

    // exercise #1
    let rnum;
    let rnum1;
    document.getElementById("Rbtn").onclick = function(){
        rnum = document.getElementById("rnum").value;
        rnum1 = rnum.toString().split(``).reverse().join(``);
        document.getElementById("rp")?.innerHTML = `The reverse number is : ${rnum1}`;
        }