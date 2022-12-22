//global scope
const shouldIGo: boolean = true;

if (shouldIGo) {
  //local scope
  let x: number = 20;
  console.log(x);
  x = 50;
  console.log(x);
}

for (let i = 0; i < 4; i++) {
  let x = 12;
  console.log(`${i}: x is ${x}`);
}

const order = prompt("what will yo order");
// order = "please order fast";
document.write(`I am preparing a ${order}`);
