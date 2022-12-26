
var password= prompt("enter your password")
console.log(password)
if(password=="open sesami"){
   
      alert( "you got all the gold in the cave")
  }
    else{
     alert("you are done")
}


var amountstr= prompt('enter your amount')
if (amountstr){
    var amount=parseInt(amountstr);
    if(!isNaN(amount)){
   alert("your vat is "+amount*0.17 )
    
    }
    else{alert("you didnt put anumber")}
}
else{ alert('you didnt put something')}



var loenstr=prompt("Enter the requested loan amount")

if(loenstr){
    var loen=parseInt(loenstr);
    if(!isNaN(loen))
   console.log( "The requested loen amount is ",loen)
}
else{
    alert("you did not put a value");
}

var itereststr=prompt("Enter the annual interest");
if(itereststr){
    var interest=parseInt(itereststr);
    if(!isNaN(interest)){
    console.log("The annual interest off the loen is " ,interest);}
    else{
        alert("you did not put anumber")
    }
}
else{
    alert("you did not put a value");
}

var yearstr=prompt(" Enter how many years the loan is")
 if(yearstr){
    var year=parseInt(yearstr)
    console.log("THE requasted loen ia for ",year,"years")
 }
  else{
    alert( "you did not put a value");
}
var totalLoen:number= (loen*(interest/100+1))
alert("THE TOTAL LOEN IS "+totalLoen)
 