const threeNumbers: Function = (
  x: number,
  y: number,
  z: number
): number | false => {
  try {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      typeof z !== "number"
    ) {
      throw new Error(`error is not a number`);
    }
    return x * y * z;
  } catch (Error) {
    alert(`Can't do a calculation, There must be 3 numbers to calculate`);
    console.error(Error);
    return false;
  }
};
let calculation = true;
const x: any = prompt(`Enter a Number 1`);
const y: any = prompt(`Enter a Number 2`);
const z: any = prompt(`Enter a Number 3`);
console.log(x * y * z);
if (x !== null && y !== null && z !== null) {
  if (threeNumbers(parseInt(x), parseInt(y), parseInt(z))) {
    alert(`The answer is ${x * y * z}`);
    calculation = false;
  }
} else {
  alert(`Can't do a calculation, There must be 3 numbers to calculate`);
}

// Question 2

function letterValue(abcToCode: string) {
  const encriptDictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  try {
    if (abcToCode.length === 1) {
      return encriptDictionary[abcToCode] || "";
    }
    if (typeof abcToCode === `number`) {
      throw new Error("We can't encrypt your message");
    }

    return abcToCode.split("").map(letterValue);
  } catch (error) {
    console.error(`If you don't type how will you encrypt?`);
    return false;
  }
}

const abcToCode: any = prompt(`Please enter the message to encrypt`);
console.log(`${letterValue(abcToCode)}`);
