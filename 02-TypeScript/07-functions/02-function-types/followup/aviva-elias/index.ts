function pureFunction(arg):number{
   let result:number=arg*4
    return result

}
console.log(pureFunction(3))

const anonymousFunction: Function= function(arg):number{
    let result:number=arg*4
    return result
}
console.log(anonymousFunction(3))


const arrowFunction: Function=(arg):number=>{
    let result:number=arg*4
    return result
}
    
console.log(arrowFunction(3))