function someFunction(arg):number{
    const result = 4*arg;
    return result; 
}
console.log(someFunction(2));

const someFunction5:Function = function(arg):number{
    const result = 4*arg;
    return result; 
}

console.log(someFunction5(5));


const someFunction6:Function = (arg):number => {
    const result = 4*arg;
    return result;
}

console.log(someFunction6(10));