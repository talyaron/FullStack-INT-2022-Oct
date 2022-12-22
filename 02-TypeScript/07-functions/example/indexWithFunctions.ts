//function sayThankYou(argument){

function sayThankYou(name: string | null): string {
  if (name) {
    name = name.toUpperCase();
    return `Thank you ${name} for registering`;
  } else {
    return "";
  }
}

function priceWithVat(price: number): number {
  return price * 1.17;
}

for (let i = 0; i < 7; i++) {
  let userName = prompt("What is your name?");
  console.log(sayThankYou(userName));
}

// userName = prompt("What is your name?");
// console.log(sayThankYou(userName));

// const userPrice = prompt("what is the price?");

// if (userPrice) {
//   const _userPrice = parseInt(userPrice);
//   const withVat = priceWithVat(_userPrice);
//   console.log(`Your price with vat is ${withVat}`);
// }
