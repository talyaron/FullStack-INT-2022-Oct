let userNumber=prompt("please write a number");

function positiveToNegitive (userNumberVar:Number|string|null):number{
    console.log(userNumberVar)
    if (isNaN(userNumberVar)){
        return alert("this is not a number")
    }
    else if (userNumberVar==0){
        return alert("The number zero is neither positive nor negative")
       
    }
    
    else {
      return (userNumberVar*(-1))  
    } 
}
console.log(userNumber)
console.log(positiveToNegitive(userNumber))