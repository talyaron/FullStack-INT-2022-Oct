// console.log("Hi Tal");
// console.log('Good evening');
// console.error('This is a F*ing error');
// console.warn("Be aware")
// console.time('aaaaa');
// console.timeEnd('aaaaa');
// console.info('info');


//variable

var x = "This is a varibale";
console.log(x);
x = 4;
console.log(x);

var y = x; //השמה
console.log(y);

var z = y*x;
console.log(z);





//example for using variables

function handleSubmit(event){
    event.preventDefault();
    var amount = event.target.elements.number.valueAsNumber;
    console.log(amount)
    var vat = amount * 1.17;
    document.querySelector('#root').innerText = `Vat is ${vat}`
}

var key = 'b8djm8'








