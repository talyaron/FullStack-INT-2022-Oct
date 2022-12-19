// // false & true
// var x = 8;
// console.log(x == 9);

// var x = 9
// console.log(x == 9);
// console.log(`---`);


// //console.log("Logical Operators")


// //and
// console.log(true && false); //2 must be true
// console.log(true && true); //2 must be true
// console.log(`---`);

// //or
// console.log(true || false); //1 true must be true
// console.log(false || false); //1 or 2 false must be false
// console.log(true || true);  //2 true must be true
// console.log(`---`);

// //not
// console.log(!false); //shows the opposite  //true
// console.log(!0); //shows the opposite, opposite of not 0 is true
// // console.log(!0)
// // falisfy variables: false, 0, null, undefined, []
// console.log(`---`);


// var x:number= 5;
// if (x>4){
//     console.log(`x is larger than 5`)
// }

// var result = confirm(`Are you sure`)
// console.log(result)

// if (result) {
// alert(`i hacked your browser`)
// }




// if (result) {
// alert(`i hacked your browser`)
// }else{
// alert(`your browser is saved`)
// }
// console.log(`---`);


// const donationstr = prompt(`How mach you donate`)
// console.log(donationstr);




const donationStr = prompt(`How mach you donate?`)
console.log(donationStr typeof donationstr);


if (donationsStr) {
    var donation = parseInt(donationsStr);
    if(!isNaN(donation)) {
        if(donation>100){
        alert(`you are awsome!!!`);
    } else {
        alert(`thanks!`);
    }       
}else{
alert(`you are not put a number`)
}

}else {
    alert(`you should enter a number`)
}