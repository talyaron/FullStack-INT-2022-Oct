
var total:number = 0;
var joeBidenStr;
var indexStr;


indexStr = prompt('please enter the number to calculate');
joeBidenStr= prompt('please enter how many times you would like to repeat the enitial calculation');

for ( var joeBiden = parseInt(joeBidenStr); joeBiden > 0; joeBiden--) {
    for (var index = parseInt(indexStr); index > 0; index--) {
        total += index;
        console.log(index)
    }
    console.log(joeBiden)
}

alert(`the total is ${total}`)
