

console.log(someFunction(3));

function someFunction(arg):number{
    const result = 2*arg;
    return result
}

//anonymous function//

const someFunction2:Function = function(arg):number{
    const result = 2*arg;
    return result;
}

// arrow function (lamda) =>

const someFunction3:Function = (arg):number=>{
    const result= 2*arg;
    return result;
}


console.log(someFunction2(3));
console.log(someFunction3(4));
console.log(someFunction3(5));
console.log(someFunction3(6));
console.log(someFunction3(7));