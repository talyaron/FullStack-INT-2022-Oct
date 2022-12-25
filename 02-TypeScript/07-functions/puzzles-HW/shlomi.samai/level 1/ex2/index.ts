
function squareOfANumber (userNumberVar:Number|string|null):number{
    if (isNaN(userNumberVar)){
        return alert("This is not a number!")
    }    
    else {
      return (userNumberVar*userNumberVar)  
    } 
}
let userNumber=prompt("please write a number");
console.log(` The square number of ${userNumber} is ${squareOfANumber(userNumber)}`)


