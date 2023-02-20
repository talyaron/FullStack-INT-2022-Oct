
function randonFunction (int:number):number{
    const result=2-int;
    return result
}

//randonFunction2(5)


const randonFunction2:Function= function (int:number):number {
    
    const result=2-int;
    return result
}

const randonFunction3:Function = (int:number)=>{
    const result=2-int;
    return result;
}

randonFunction(3)
randonFunction2(5)
randonFunction3(10)