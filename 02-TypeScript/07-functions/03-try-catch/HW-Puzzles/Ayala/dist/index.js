//1
/*
function multiplication(num1: number, num2: number, num3: number) {


  try {

    return num1 * num2 * num3;


  } catch (error) {
    console.error(error.message);

  }
}
//const result = multiplication(2, 4, 6);
//console.log(result);
const userNumber1 = Number(prompt("Enter your first number"))
const userNumber2 = Number(prompt("Enter your first number"))
const userNumber3 = Number(prompt("Enter your first number"))

if (!isNaN(userNumber1) || isNaN(userNumber2) || isNaN(userNumber3)) {
  console.log("All inputs should be numbers no characters allowed")
} else {
  const result = multiplication(userNumber1, userNumber2, userNumber3);
 console.log(result)
}
*/
//2  הצפנת מילה עם מספרים
function exTwo(word) {
    try {
        var encripted = "";
        for (var i = 0; i < word.length; i++) {
            var char = word[i];
            var codeChar = (char.toLowerCase().charCodeAt(0) - 96);
            encripted += "" + codeChar;
        }
        console.log(encripted);
    }
    catch (error) {
        console.error(error.message);
    }
}
exTwo("abc");
/*function exTwo1(word: string) {
  try {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log(char);
      console.log(char.toLowerCase().charCodeAt(0));
    }
   } catch (error) {
      console.error(error.message);

    }
  }
    exTwo1("abc");*/ 
