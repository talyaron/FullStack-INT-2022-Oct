const test: Function = (product: string): number | false => {
    try {
        switch (product) {
            case "cake":
                return 70;
            case "ice-cream":
                return 8;
            case "cookie":
                return 5;
            default:
                throw new Error("Invalid input");
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

var check = true;
while (check) {
    const answer = prompt("ice-cream/cake/cookie")
    if (test(answer)) {
        alert(test(answer));
        check = false;
    } else {
        alert("Invalid ipnut, try again...");
    }
}