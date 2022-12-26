const negativeNum = (num: number): number => {
  return -Math.abs(num);
};

const celToFer = (celDegree: number): number => {
  return celDegree * 1.8 + 32;
};

const largerNum = (firstNum: number, secondNum: number): number | string => {
  if (firstNum === secondNum) {
    return "they are the same";
  }
  //return condition ?(if) true :(else) false
  return firstNum > secondNum ? firstNum : secondNum;
};

const heightRelativeToGender = (height: number, gender: string): number => {
  let avgMaleHeight: number = 174;
  let avgFemaleHeight: number = 161;

  return gender === "male" ? avgMaleHeight - height : avgFemaleHeight - height;
};

const reverseNum = (num:number):number => {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
}

negativeNum(23);
celToFer(30);
largerNum(40, 21);
largerNum(12, 12);
