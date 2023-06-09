let input = document.querySelector("#input_multiplication") as HTMLInputElement;

let sum = 0;
let result = 1;
let count = 0;

input.addEventListener("keypress", (event: KeyboardEvent | undefined): void => {
  let addNum = document.querySelector(
    ".Some_numbers_have_been_entered"
  ) as HTMLHeadElement;
  let error_Only_3_numbers = document.querySelector(
    ".Only_3_numbers"
  ) as HTMLHeadElement;
  let btn = document.querySelector("#btn") as HTMLButtonElement;
  let enter3num = document.querySelector(
    ".The_amount_of_numbers_entered"
  ) as HTMLDivElement;

  try {
    if (event && event.key === "Enter" && input.value !== "") {
      sum++;
      switch (sum) {
        case 1:
          let firstNumber: string | undefined = input.value;
          let castingFirstNumber = parseInt(firstNumber);
          console.log(castingFirstNumber);
          addNum.textContent = "+1";
          input.value = "";
          multiplication(castingFirstNumber);

          break;

        case 2:
          let secondNumber: string | undefined = input.value;
          let castingSecondNumber = parseInt(secondNumber);
          console.log(castingSecondNumber);
          addNum.textContent = "+2";
          input.value = "";
          multiplication(castingSecondNumber);

          break;

        case 3:
          let targetNumber: string | undefined = input.value;
          let castingTargetNumber = parseInt(targetNumber);
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
  } catch (e) {
    let error = e.toString();
    error_Only_3_numbers.textContent = error;
  }

  function multiplication(n: number) {
    count++;
    result = result * n;
    console.log(result);
  }

  btn.addEventListener("click", (event) => {
    if (count == 3) {
      let showresult = result.toString();
      error_Only_3_numbers.textContent = showresult;
    }
  });
});

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

let btnEncryption = document.querySelector(
  ".btnEncryption"
) as HTMLButtonElement;

btnEncryption.addEventListener("click", (event) => {
  let encryptionResult: string = "";
  let inputEncryption = (
    document.querySelector(".inputEncryption") as HTMLInputElement | null
  )?.value;
  let split_the_string: string[] = [];
  try {
    if (inputEncryption) {
      split_the_string = inputEncryption.split("");

      if (split_the_string) {
        for (let i = 0; i < split_the_string.length; i++) {
          switch (split_the_string[i]) {
            case "a":
              encryptionResult += "1";
              encryptionResult += " ";
              break;

            case "b":
              encryptionResult += "2";
              encryptionResult += " ";
              break;

            case "c":
              encryptionResult += "3";
              encryptionResult += " ";
              break;

            case "d":
              encryptionResult += "4";
              encryptionResult += " ";
              break;
            case "e":
              encryptionResult += "5";
              encryptionResult += " ";
              break;

            case "f":
              encryptionResult += "6";
              encryptionResult += " ";
              break;
            case "g":
              encryptionResult += "7";
              encryptionResult += " ";
              break;

            case "h":
              encryptionResult += "8";
              encryptionResult += " ";
              break;
            case "i":
              encryptionResult += "9";
              encryptionResult += " ";
              break;

            case "j":
              encryptionResult += "10";
              encryptionResult += " ";
              break;
            case "k":
              encryptionResult += "11";
              encryptionResult += " ";
              break;
            case "l":
              encryptionResult += "12";
              encryptionResult += " ";
              break;

            case "m":
              encryptionResult += "13";
              encryptionResult += " ";
              break;
            case "n":
              encryptionResult += "14";
              encryptionResult += " ";
              break;
            case "o":
              encryptionResult += "15";
              encryptionResult += " ";
              break;

            case "p":
              encryptionResult += "16";
              encryptionResult += " ";
              break;
            case "q":
              encryptionResult += "17";
              encryptionResult += " ";
              break;
            case "r":
              encryptionResult += "18";
              encryptionResult += " ";
              break;

            case "s":
              encryptionResult += "19";
              encryptionResult += " ";
              break;
            case "t":
              encryptionResult += "20";
              encryptionResult += " ";
              break;
            case "u":
              encryptionResult += "21";
              encryptionResult += " ";
              break;

            case "v":
              encryptionResult += "22";
              encryptionResult += " ";
              break;

            case "w":
              encryptionResult += "23";
              encryptionResult += " ";
              break;

            case "x":
              encryptionResult += "24";
              encryptionResult += " ";
              break;

            case "y":
              encryptionResult += "25";
              encryptionResult += " ";
              break;

            case "z":
              encryptionResult += "26";
              encryptionResult += " ";
              break;

            //  ------------------------------------------------

            case "A":
              encryptionResult += "1";
              encryptionResult += " ";
              break;

            case "B":
              encryptionResult += "2";
              encryptionResult += " ";
              break;

            case "C":
              encryptionResult += "3";
              encryptionResult += " ";
              break;

            case "D":
              encryptionResult += "4";
              encryptionResult += " ";
              break;

            case "E":
              encryptionResult += "5";
              encryptionResult += " ";
              break;

            case "F":
              encryptionResult += "6";
              encryptionResult += " ";
              break;

            case "G":
              encryptionResult += "7";
              encryptionResult += " ";
              break;

            case "H":
              encryptionResult += "8";
              encryptionResult += " ";
              break;

            case "I":
              encryptionResult += "9";
              break;

            case "J":
              encryptionResult += "10";
              encryptionResult += " ";
              break;
            case "K":
              encryptionResult += "11";
              encryptionResult += " ";
              break;
            case "L":
              encryptionResult += "12";
              encryptionResult += " ";
              break;

            case "M":
              encryptionResult += "13";
              encryptionResult += " ";
              break;
            case "N":
              encryptionResult += "14";
              encryptionResult += " ";
              break;
            case "O":
              encryptionResult += "15";
              encryptionResult += " ";
              break;

            case "P":
              encryptionResult += "16";
              encryptionResult += " ";
              break;
            case "Q":
              encryptionResult += "17";
              encryptionResult += " ";
              break;
            case "R":
              encryptionResult += "18";
              encryptionResult += " ";
              break;

            case "S":
              encryptionResult += "19";
              encryptionResult += " ";
              break;
            case "T":
              encryptionResult += "20";
              encryptionResult += " ";
              break;
            case "U":
              encryptionResult += "21";
              encryptionResult += " ";
              break;

            case "V":
              encryptionResult += "22";
              encryptionResult += " ";
              break;

            case "W":
              encryptionResult += "23";
              encryptionResult += " ";
              break;

            case "X":
              encryptionResult += "24";
              encryptionResult += " ";
              break;

            case "Y":
              encryptionResult += "25";
              encryptionResult += " ";
              break;

            case "Z":
              encryptionResult += "26";
              encryptionResult += " ";
              break;

            // ---------------------------------
            case "1":
              encryptionResult += "A";
              encryptionResult += " ";
              break;

            case "2":
              encryptionResult += "B";
              encryptionResult += " ";
              break;

            case "3":
              encryptionResult += "C";
              encryptionResult += " ";
              break;

            case "4":
              encryptionResult += "D";
              encryptionResult += " ";
              break;
            case "5":
              encryptionResult += "E";
              encryptionResult += " ";
              break;

            case "6":
              encryptionResult += "F";
              encryptionResult += " ";
              break;
            case "7":
              encryptionResult += "G";
              encryptionResult += " ";
              break;

            case "8":
              encryptionResult += "H";
              encryptionResult += " ";
              break;
            case "9":
              encryptionResult += "I";
              encryptionResult += " ";
              break;

            // -------------------------------

            case "!":
              encryptionResult += "!";
              encryptionResult += " ";
              break;
            case "@":
              encryptionResult += "@";
              encryptionResult += " ";
              break;
            case "#":
              encryptionResult += "#";
              encryptionResult += " ";
              break;
            case "$":
              encryptionResult += "$";
              encryptionResult += " ";
              break;
            case "%":
              encryptionResult += "%";
              encryptionResult += " ";
              break;
            case "^":
              encryptionResult += "^";
              encryptionResult += " ";
              break;
            case "&":
              encryptionResult += "&";
              encryptionResult += " ";
              break;
            case "*":
              encryptionResult += "*";
              encryptionResult += " ";
              break;
            case "(":
              encryptionResult += "(";
              encryptionResult += " ";
              break;
            case "*":
              encryptionResult += ")";
              encryptionResult += " ";
              break;

            case " ":
              encryptionResult += " , ";
              break;

            default:
              throw new Error(
                "linsert error only in tange [ a-z / A-Z / 0-9 / !-)  ]"
              );
              break;
          }
        }
      }
    }

    console.log(split_the_string);
    console.log(encryptionResult);
    let result = document.querySelector(".EncryptionResult") as HTMLHeadElement;
    result.innerText = encryptionResult;
  } catch (error) {
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
