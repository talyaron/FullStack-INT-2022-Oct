for(var i=99;i>0;i--){
    console.log(`${i} Bottles of Beer. take one down pass it around, and ${i-1} on the wall`)
}


var sum=0;
for (var i=1;i<=15;i++){
    sum=sum+i;
    console.log(`${i}, ${sum}`);
}
console.log (sum);
sum=0;




var sum2=0;
for (var j=1;j<=5;j++){
    for (var i=1;i<=15;i++){
        sum=sum+i;
    }
    //console.log (sum);
    sum2 =sum2 +(j*sum); 
    sum=0;
    //console.log (sum2);
}
console.log (sum2);


