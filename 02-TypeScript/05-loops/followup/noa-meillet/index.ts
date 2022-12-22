for (var i=0;i<100;i++){
    if (i%10==7 || i/10==7){
        console.log(i);
    }
}

var isANum=false;
var ageStr;
var age;
while (isANum==false){
    ageStr= prompt("Enter your Age:");
    age = parseInt(ageStr);
    if(isNaN(age)){
        alert("You didnt put a number");
    } else {
        alert(`Your age is ${age}`);
        isANum=true;
    }
}
