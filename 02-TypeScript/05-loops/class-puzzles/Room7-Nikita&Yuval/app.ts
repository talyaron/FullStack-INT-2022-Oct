
// 1)
for (var i = 100 ; i > 0 ; i--){
    console.log(`${i} Bottles of Beer. take one down pass it around, and ${i-1} on the wall"`);
}

// 2+3)

var sum:number = 0;
for (var i = 1 ; i <= 3 ; i++){
    for (var j = 1 ; j <= 3 ; j++){
        sum = sum + i;
    }
}
console.log(sum)