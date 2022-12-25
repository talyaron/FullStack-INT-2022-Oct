let userNumber=prompt("please write a number");

function positiveToNegitive (userNumberVar:Number|string|null):number{
    console.log(userNumberVar)
    if (isNaN(userNumberVar)){
        return alert("This is not a number!")
    }    
    else {
      return (userNumberVar*userNumberVar)  
    } 
}
console.log(userNumber)
console.log(positiveToNegitive(userNumber))


