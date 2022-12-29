const threeNumbers: Function = (
  num1: number,
  num2: number,
  num3: number
): number | false => {
  try {
    if (
      typeof num1 !== `number` ||
      typeof num2 !== `number` ||
      typeof num3 !== `number`
    ) {
      throw new Error(`not a number`);
    }
    return num1 * num2 * num3;
  } catch (error) {
    console.error(error);
    return false;
  }
};

let numberAllow = true;
function main() {
  const num1: any = prompt("what is your first number");
  const num2: any = prompt("what is your second number");
  const num3: any = prompt("what is your third number");

 const result= threeNumbers(parseInt(num1), parseInt(num2), parseInt(num3));
 console.log(result);
}
main()
