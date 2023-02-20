function reversedNum(num: number): number {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

//arrow function returns reversed number as a string
const revNum = (num: number) =>
  (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  ).toString();

console.log(reversedNum(123456789));
console.log(reversedNum(-123456789));

console.log(revNum(32546758654));
console.log(revNum(-6754341232145364));

const inputNumber = document.querySelector("#number") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLHeadElement;

inputNumber.addEventListener("keydown", (e) => {
  e.defaultPrevented;

  if (e.key == "Enter") {
    output.textContent = revNum(parseFloat(inputNumber.value));
    inputNumber.value = '';
  }
});
