// //h.w exercise-1
// const multiplicationNumbers: Function = (num1, num2, num3): number | false => {
//     try {
//         if ((typeof num1 !== 'number') ||
//             (typeof num2 !== 'number') ||
//             (typeof num3 !== 'number')) {
//             throw new Error("The variables should be a numbers");
//         }
//         const result: number = num1 * num2 * num3
//         return result
//     } catch (error) {
//         console.error(error)
//         return false
//     }
// }
// const num1 = prompt(" enter the first number")
// const num2 = prompt("enter the second number ")
// const num3 = prompt("enter the third number")
// console.log(multiplicationNumbers(num1, num2, num3))
// if (num1 !== null || num2 !== null || num3 !== null) {
//     if ((typeof num1 == 'number') &&
//         (typeof num2 == 'number') &&
//         (typeof num3 == 'number')) {
//         alert("good, you enter a numbers")
//     }
//     else { alert("you should enter anumber") }
// }
// else {
//     alert("you should enter anumber")
// }
//execise 2
var abcToCode = prompt("Please enter the message to encrypt");
console.log("" + letterValue(abcToCode));
function letterValue(abcToCode) {
    var encriptDictionary = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };
    try {
        if (abcToCode.length === 1) {
            return encriptDictionary[abcToCode] || "";
        }
        if (abcToCode == undefined) {
            throw new Error("We can't encrypt your message");
        }
        return abcToCode.split("").map(letterValue);
    }
    catch (error) {
        console.error("If you don't type how will you encrypt?");
        return false;
    }
}
