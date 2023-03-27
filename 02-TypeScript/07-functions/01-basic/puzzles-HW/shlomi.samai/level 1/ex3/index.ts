function CelsiusToFahrenheit(userNumberVar: number): number | false {
  if (isNaN(userNumberVar)) {
    return false;
  } else {
    return userNumberVar * 1.8 + 32;
  }
}

const userNumberStr: string | null = prompt("please write a celsius degree");
if (userNumberStr) {
  const userNumber = parseInt(userNumberStr);
  
  console.log(`The Fahrenheit degree is ${CelsiusToFahrenheit(userNumber)}`);
}
