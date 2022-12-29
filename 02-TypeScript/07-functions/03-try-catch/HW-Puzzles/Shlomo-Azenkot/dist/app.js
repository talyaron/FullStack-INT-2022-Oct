var input = document.querySelector("#input_multiplication");
var sum = 0;
var result = 1;
var count = 0;
input.addEventListener("keypress", function (event) {
    var addNum = document.querySelector(".Some_numbers_have_been_entered");
    var error_Only_3_numbers = document.querySelector(".Only_3_numbers");
    var btn = document.querySelector("#btn");
    var enter3num = document.querySelector(".The_amount_of_numbers_entered");
    try {
        if (event && event.key === "Enter" && input.value !== "") {
            sum++;
            switch (sum) {
                case 1:
                    var firstNumber = input.value;
                    var castingFirstNumber = parseInt(firstNumber);
                    console.log(castingFirstNumber);
                    addNum.textContent = "+1";
                    input.value = "";
                    multiplication(castingFirstNumber);
                    break;
                case 2:
                    var secondNumber = input.value;
                    var castingSecondNumber = parseInt(secondNumber);
                    console.log(castingSecondNumber);
                    addNum.textContent = "+2";
                    input.value = "";
                    multiplication(castingSecondNumber);
                    break;
                case 3:
                    var targetNumber = input.value;
                    var castingTargetNumber = parseInt(targetNumber);
                    console.log(castingTargetNumber);
                    addNum.textContent = "✔";
                    enter3num.classList.add("activ");
                    input.value = "";
                    multiplication(castingTargetNumber);
                    break;
                default:
                    throw new Error(" should be 3 numbers ");
            }
        }
    }
    catch (e) {
        var error = e.toString();
        error_Only_3_numbers.textContent = error;
    }
    function multiplication(n) {
        count++;
        result = result * n;
        console.log(result);
    }
    btn.addEventListener('click', function (event) {
        if (count == 3) {
            var showresult = result.toString();
            error_Only_3_numbers.textContent = showresult;
        }
    });
});
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
var btnEncryption = document.querySelector(".btnEncryption");
btnEncryption.addEventListener('click', function (event) {
    var _a;
    var encryptionResult = "";
    var inputEncryption = (_a = document.querySelector(".inputEncryption")) === null || _a === void 0 ? void 0 : _a.value;
    var split_the_string = [];
    try {
        if (inputEncryption) {
            split_the_string = inputEncryption.split('');
            if (split_the_string) {
                for (var i = 0; i < split_the_string.length; i++) {
                    switch (split_the_string[i]) {
                        case "a":
                            encryptionResult += "1";
                            break;
                        case "b":
                            encryptionResult += "2";
                            break;
                        case "c":
                            encryptionResult += "3";
                            break;
                        case "d":
                            encryptionResult += "4";
                            break;
                        case "e":
                            encryptionResult += "5";
                            break;
                        case "f":
                            encryptionResult += "6";
                            break;
                        case "g":
                            encryptionResult += "7";
                            break;
                        case "h":
                            encryptionResult += "8";
                            break;
                        case "i":
                            encryptionResult += "9";
                            break;
                        case "j":
                            encryptionResult += "10";
                            break;
                        case "k":
                            encryptionResult += "11";
                            break;
                        case "l":
                            encryptionResult += "12";
                            break;
                        case "m":
                            encryptionResult += "13";
                            break;
                        case "n":
                            encryptionResult += "14";
                            break;
                        case "o":
                            encryptionResult += "15";
                            break;
                        case "p":
                            encryptionResult += "16";
                            break;
                        case "q":
                            encryptionResult += "17";
                            break;
                        case "r":
                            encryptionResult += "18";
                            break;
                        case "s":
                            encryptionResult += "19";
                            break;
                        case "t":
                            encryptionResult += "20";
                            break;
                        case "u":
                            encryptionResult += "21";
                            break;
                        case "v":
                            encryptionResult += "22";
                            break;
                        case "w":
                            encryptionResult += "23";
                            break;
                        case "x":
                            encryptionResult += "24";
                            break;
                        case "y":
                            encryptionResult += "25";
                            break;
                        case "z":
                            encryptionResult += "26";
                            break;
                        //  ------------------------------------------------
                        case "A":
                            encryptionResult += "1";
                            ;
                            break;
                        case "B":
                            encryptionResult += "2";
                            ;
                            break;
                        case "C":
                            encryptionResult += "3";
                            ;
                            break;
                        case "D":
                            encryptionResult += "4";
                            ;
                            break;
                        case "E":
                            encryptionResult += "5";
                            ;
                            break;
                        case "F":
                            encryptionResult += "6";
                            ;
                            break;
                        case "G":
                            encryptionResult += "7";
                            ;
                            break;
                        case "H":
                            encryptionResult += "8";
                            ;
                            break;
                        case "I":
                            encryptionResult += "9";
                            ;
                            break;
                        case "J":
                            encryptionResult += "10";
                            break;
                        case "K":
                            encryptionResult += "11";
                            break;
                        case "L":
                            encryptionResult += "12";
                            break;
                        case "M":
                            encryptionResult += "13";
                            break;
                        case "N":
                            encryptionResult += "14";
                            break;
                        case "O":
                            encryptionResult += "15";
                            break;
                        case "P":
                            encryptionResult += "16";
                            break;
                        case "Q":
                            encryptionResult += "17";
                            break;
                        case "R":
                            encryptionResult += "18";
                            break;
                        case "S":
                            encryptionResult += "19";
                            break;
                        case "T":
                            encryptionResult += "20";
                            break;
                        case "U":
                            encryptionResult += "21";
                            break;
                        case "V":
                            encryptionResult += "22";
                            break;
                        case "W":
                            encryptionResult += "23";
                            break;
                        case "X":
                            encryptionResult += "24";
                            break;
                        case "Y":
                            encryptionResult += "25";
                            break;
                        case "Z":
                            encryptionResult += "26";
                            break;
                        // ---------------------------------
                        case "1":
                            encryptionResult += "A";
                            break;
                        case "2":
                            encryptionResult += "B";
                            break;
                        case "3":
                            encryptionResult += "C";
                            break;
                        case "4":
                            encryptionResult += "D";
                            break;
                        case "5":
                            encryptionResult += "E";
                            break;
                        case "6":
                            encryptionResult += "F";
                            break;
                        case "7":
                            encryptionResult += "G";
                            break;
                        case "8":
                            encryptionResult += "H";
                            break;
                        case "9":
                            encryptionResult += "I";
                            break;
                        // -------------------------------
                        case "!":
                            encryptionResult += "!";
                            break;
                        case "@":
                            encryptionResult += "@";
                            break;
                        case "#":
                            encryptionResult += "#";
                            break;
                        case "$":
                            encryptionResult += "$";
                            break;
                        case "%":
                            encryptionResult += "%";
                            break;
                        case "^":
                            encryptionResult += "^";
                            break;
                        case "&":
                            encryptionResult += "&";
                            break;
                        case "*":
                            encryptionResult += "*";
                            break;
                        case "(":
                            encryptionResult += "(";
                            break;
                        case "*":
                            encryptionResult += ")";
                            break;
                        default:
                            throw new Error('linsert error only in tange [ a-z / A-Z / 0-9 / !-)  ]');
                            break;
                    }
                }
            }
        }
        console.log(encryptionResult);
        var result_1 = document.querySelector(".EncryptionResult");
        result_1.textContent = encryptionResult;
    }
    catch (error) {
        console.error(error);
    }
});
// const btn = document.getElementById("btn");
// btn?.addEventListener("click",(event)=>{
//   //  const input: HTMLInputElement | null
// const input = document.getElementById('input') as HTMLInputElement;
// const value :string | undefined = input?.value;
// // const reversedNum = value => parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value);
// function reversedNum(value){
//     return (parseFloat(value.toString().split('').reverse().join('')) * Math.sign(value)).toString();                
//   }
//   const reverse = reversedNum(value);
// let result = document.getElementById("result")as HTMLHeadElement;
// result.innerHTML=reverse;
// // input?.addEventListener('input', function (event) {
// //   const target = event.target as HTMLInputElement;
// //   console.log(target.value);
// // });
// });
// // function reverseNumber(reverse:number):number{
// //   return reverse;
// // };
// let a :string = "";
// const array = [ 'third', 'fourth','A','first', 'second'];
// for (let i = 0; i < array.length; i++) {
//     switch (array[i]) {
//         case "first" :
//             console.log('This is first');
//          a+="1";
//             break;
//         case 'second':
//             a+="2";
//             console.log('This is second');
//             break;
//         case 'third':
//             a+="3";
//             console.log('This is third');
//             break;
//         case 'fourth':
//             a+="4";
//             console.log('This is fourth');
//             break;
//         case 'A':
//             a+="5";
//             console.log('This is A');
//             break;
//         default:
//             console.log('None');
//             break;
//     }
// }
// console.log(a);
// for (var i = 0; i <array.length;i++){
//     console.log(array[i]);
// }
// const a:Function=(ar):number=>{
//     return ar*1;
// }
// const b:Function=function(arg){
//     return arg*2;
// }
// function c(a){
//     return a*3;
// }
// console.log(a(20));
// console.log(b(20));
// console.log(c(20));
// const someFunction3:Function = (ar):number=>{
//     const result = 2*ar;
//     return result;
// }
// var btn = document.getElementById('vat');
// var input = document.getElementById('textFild').value;
// var message=document.getElementById('message');
// btn.addEventListener('click', (event) => {
//     if(isNaN(input)){  
//        message.innerHTML ='no number'
//     }else {
//        message.innerHTML ='yes number'
//     }
//       });
//    // second option
//    btn.addEventListener('click', (event) => {
//     if((typeof input !=='number')){
//         message.innerHTML ='no number'
//    }else{
//     message.innerHTML ='is number'
//    }
//       });
//    // third option
//    btn.addEventListener('click', (event) => {
//     var regular_expression=/[0-9]+/ig;
//     var result = regular_expression.test(input);
//     if((typeof result !== true)){
//         message.innerHTML ='no number'
//    }else{
//     message.innerHTML =' number'
//    }
//    });
