


function someFunction(child):number{
    const result = 3*child;
    return result
}


const someFunction2:Function = function(child):number{
    const result = 3*child;
    return result;
}

const someFunction3:Function = (child):number=>{
    const result = 3*child;
    return result;
}



console.log(someFunction2(3));
console.log(someFunction3(4));
console.log(someFunction3(5));

