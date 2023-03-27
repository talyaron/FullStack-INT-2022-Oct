console.log(someFunction(3));

function someFunction(arg):number{
    const result = 2*arg;
    return result
}



//anonymous function
const someFunction2:function = function(arg):number{
   const result = 2*arg;
   return result;
}

//arrow function (lamda)
const someFunction3:function = (arg):number=>{
    const result = 2*arg;
    return result;
}