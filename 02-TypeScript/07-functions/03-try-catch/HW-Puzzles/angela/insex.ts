// level 1
const multiplication =(num1:number,num2:number,num3:number) =>{
    try {
        if (typeof num1!=='number'||null && typeof num2!=='number' || null && typeof num3!=='number' ||null ) {
        throw new Error("you have entered an invaild value")
        }
        return num1*num2*num3
    } catch (error) {
        console.error(error)
    }
}
// let result = true
// while(result){
//     const q1= prompt("pick your first number")
//     const q2= prompt("pick your second number")
//     const q3= prompt("pick your last number")
//     if ()
// }
