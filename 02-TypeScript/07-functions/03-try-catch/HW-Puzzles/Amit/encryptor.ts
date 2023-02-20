const encryptor: Function = (userPassword: string) => {
    try {
        let arrayedPassword: string | number[] = [];

        for (let i = 0; i < userPassword.length; i++) {
            let outputCode = userPassword.charCodeAt(i) * 520;
            arrayedPassword.push(outputCode);
        }

        return arrayedPassword.join("");
    }

    catch {
        console.error(Error);
        return false;
    }
}

let repeat: boolean = true;

while (repeat === true) {

    const userPassword: string | null = prompt("Do not go gentle into that good night");
    console.log(typeof userPassword);
    if (userPassword !== null) {

        if ((isNaN(Number(userPassword))) && (userPassword !== "")) {
            alert(`The encryption of ${userPassword} is ${encryptor(userPassword)}`);
        } else {
            alert("You didn't enter letters");
        }

    } else {
        alert("Thank you, come again!");
        repeat = false;
    }
}


