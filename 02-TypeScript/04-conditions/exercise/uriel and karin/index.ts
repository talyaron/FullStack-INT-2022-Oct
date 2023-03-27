// // var pass = prompt("what is the password");
// // console.log (pass);


// // if (pass === "open sessami"){
// // console.log ("you got all the gold ")}


// // else  {console.log ("you are done")};




// var ammount = 566;
// console.log (ammount);


// var vat = (ammount)*0.17;
// console.log (vat)
// console.log (`the vat for ${ammount} is ${vat} ` );



// var vat = (ammount)*1.17;
// console.log (vat);



// console.log (`the ammount ${ammount} shekels with the vat is ${vat} ` );

let userDetails = {
    name: "John Doe",
    username: "jonnydoe",
    age: 14
  };
  
  let myEmptyObj = {};
  let nullObj = null;
  let undefinedObj;
  
  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };
  
  console.log(isObjectEmpty(userDetails)); // false
  console.log(isObjectEmpty(myEmptyObj)); // true
  console.log(isObjectEmpty(undefinedObj)); // undefined
  console.log(isObjectEmpty(nullObj)); // null




