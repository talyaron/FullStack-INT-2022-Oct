// level 1
var multiplication = function (num1, num2, num3) {
    try {
        if (typeof num1 !== 'number' || null && typeof num2 !== 'number' || null && typeof num3 !== 'number' || null) {
            throw new Error("you have entered an invaild value");
        }
        return num1 * num2 * num3;
    }
    catch (error) {
        console.error(error);
    }
};
// let result = true
// while(result){
//     const q1= prompt("pick your first number")
//     const q2= prompt("pick your second number")
//     const q3= prompt("pick your last number")
//     if ()
// }
