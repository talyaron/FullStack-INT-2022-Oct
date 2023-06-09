let numStr;
let num;

while (isNaN(num) || numStr == null){
    numStr= prompt("Enter the number you want to reverse:");
    if (numStr){
        num= parseInt(numStr);
        if (isNaN(num)){
            alert("You did not put a number...");
        }
    } else {
        alert("You did not put a value a all...");
    }
}

alert(`the reverse number of ${num} is ${reverseRecursive(num,0)}`);


//function with recursive
function reverseRecursive(num:number,rem:number):number {
     if (num<10){
        return rem*10+num;
     } else {
        rem= rem*10 + num%10;
        return reverseRecursive(Math.floor(num/10),rem);  
     }
 }

 //function with loop
 function reverse(num:number):number {
    let rem=0;
    while(num>0){
     rem= rem*10 + num%10;
     num=Math.floor(num/10);
    }
    return rem;
 }


