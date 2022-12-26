function reverse(userNumber: number): number {
    let straightNumber = userNumber;
    let reverseNumber: number = 0;

    while (straightNumber > 0) {
        reverseNumber = reverseNumber * 10 + straightNumber % 10;
        straightNumber = Math.floor(straightNumber / 10);
    }

    return reverseNumber;
}

let again: boolean = true;

while (again === true) {
    const nStr = prompt("Enter a number you would like to reverse:\n (to stop press cancel)");

    if (nStr !== null) {
        const userNumber = parseInt(nStr);

        if (!isNaN(userNumber) && (nStr !== "")) {
            console.log(`${userNumber} in reverse is ${reverse(userNumber)}`);
            alert(`The reversed number of ${userNumber} is ${reverse(userNumber)}`);
        } else {
            alert("You didn't enter a number");
        }

    } else {
        alert("Thank you, come again!");
        again = false;
    }
} 