var amount= prompt ("what is your amount?");
console.log(amount);

if(amount){
    var amountNum=parseInt(amount);

    if(!isNaN(amountNum)){

        alert(`The total amount is ${amountNum*1.17}`);
    }
    else{
        prompt ("please write a number");   
    }

}
else{
    prompt ("please write something");   
}
